import { NextRequest, NextResponse } from 'next/server';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import { validateEmail, validateOrigin } from '@/lib/server-validation';

// Rate limit: 3 subscribe attempts per IP per 10 minutes
const RATE_LIMIT = { limit: 3, windowMs: 10 * 60 * 1000 };

export async function POST(req: NextRequest) {
  // ── CSRF origin check ──────────────────────────────────────────────
  if (!validateOrigin(req)) {
    return NextResponse.json({ error: 'Forbidden.' }, { status: 403 });
  }

  // ── Rate limiting ──────────────────────────────────────────────────
  const ip = getClientIp(req);
  const rl = rateLimit(ip, RATE_LIMIT);
  if (!rl.success) {
    return NextResponse.json(
      { error: 'Too many requests. Please wait before trying again.' },
      {
        status: 429,
        headers: { 'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)) },
      }
    );
  }

  // ── Parse body ─────────────────────────────────────────────────────
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const { email, _hp } = (body as Record<string, unknown>) ?? {};

  // ── Honeypot ───────────────────────────────────────────────────────
  if (_hp && String(_hp).trim().length > 0) {
    return NextResponse.json({ success: true });
  }

  // ── Validate ───────────────────────────────────────────────────────
  const emailErr = validateEmail(email);
  if (emailErr) {
    return NextResponse.json({ error: emailErr }, { status: 422 });
  }

  const safeEmail = String(email).trim().toLowerCase();

  // Forward to your existing backend or handle directly
  const backendUrl = process.env.NEXT_PUBLIC_API_URL
    ? `${process.env.NEXT_PUBLIC_API_URL}/newsletter/subscribe`
    : null;

  if (backendUrl) {
    try {
      const res = await fetch(backendUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: safeEmail }),
        signal: AbortSignal.timeout(10_000),
      });
      if (!res.ok) throw new Error('Backend subscription failed');
    } catch {
      // Log but don't expose internal errors
      console.error('Newsletter subscription backend error');
      return NextResponse.json(
        { error: 'Unable to subscribe right now. Please try again later.' },
        { status: 502 }
      );
    }
  }

  return NextResponse.json({ success: true });
}
