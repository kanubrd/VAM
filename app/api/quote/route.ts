import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { rateLimit, getClientIp } from '@/lib/rate-limit';
import {
  sanitise,
  validateEmail,
  validateName,
  validateCompany,
  validateMaterial,
  validateProducts,
  validateOrigin,
} from '@/lib/server-validation';

// Rate limit: 5 quote submissions per IP per 15 minutes
const RATE_LIMIT = { limit: 5, windowMs: 15 * 60 * 1000 };

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
      { error: 'Too many requests. Please wait before submitting again.' },
      {
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil((rl.resetAt - Date.now()) / 1000)),
          'X-RateLimit-Limit': String(RATE_LIMIT.limit),
          'X-RateLimit-Remaining': '0',
        },
      }
    );
  }

  // ── Parse & validate body ──────────────────────────────────────────
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (typeof body !== 'object' || body === null) {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, company, email, products, material, _hp } = body as Record<string, unknown>;

  // ── Honeypot: bots fill this field, humans don't ───────────────────
  if (_hp && String(_hp).trim().length > 0) {
    // Silently accept to not reveal the honeypot to bots
    return NextResponse.json({ success: true });
  }

  // ── Server-side validation ─────────────────────────────────────────
  const errors: Record<string, string> = {};
  const emailErr    = validateEmail(email);
  const nameErr     = validateName(name);
  const companyErr  = validateCompany(company);
  const materialErr = validateMaterial(material);
  const productsErr = validateProducts(products);

  if (emailErr)    errors.email    = emailErr;
  if (nameErr)     errors.name     = nameErr;
  if (companyErr)  errors.company  = companyErr;
  if (materialErr) errors.material = materialErr;
  if (productsErr) errors.products = productsErr;

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: 'Validation failed.', errors }, { status: 422 });
  }

  // ── Sanitise all string inputs ─────────────────────────────────────
  const safeName     = sanitise(name);
  const safeCompany  = sanitise(company);
  const safeEmail    = String(email).trim().toLowerCase();
  const safeMaterial = sanitise(material);
  const safeProducts = Array.isArray(products)
    ? (products as string[]).map((p) => sanitise(p))
    : [];

  // ── Send email ─────────────────────────────────────────────────────
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const productList =
      safeProducts.length > 0
        ? safeProducts.map((p) => `• ${p}`).join('\n')
        : 'None selected';

    await transporter.sendMail({
      from: `"Valtrix Website" <${process.env.SMTP_USER}>`,
      to: 'info@valtrixmaterials.com',
      replyTo: safeEmail,
      subject: `New Quote Request from ${safeName || 'Website Visitor'}`,
      text: `
New Quote Request
─────────────────────────────
Name:     ${safeName || 'Not provided'}
Company:  ${safeCompany || 'Not provided'}
Email:    ${safeEmail}

Products Interested In:
${productList}

Additional Requirements:
${safeMaterial || 'None'}
─────────────────────────────
Sent from valtrixmaterials.com
      `.trim(),
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
          <div style="background:#2C3E50;padding:24px;text-align:center;">
            <h2 style="color:#fff;margin:0;font-size:20px;">New Quote Request</h2>
            <p style="color:#D1F2F7;margin:4px 0 0;font-size:13px;">Received from valtrixmaterials.com</p>
          </div>
          <div style="padding:28px;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#6B7280;font-size:13px;width:120px;">Name</td><td style="padding:8px 0;color:#2C3E50;font-size:14px;font-weight:600;">${safeName || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#6B7280;font-size:13px;">Company</td><td style="padding:8px 0;color:#2C3E50;font-size:14px;font-weight:600;">${safeCompany || '—'}</td></tr>
              <tr><td style="padding:8px 0;color:#6B7280;font-size:13px;">Email</td><td style="padding:8px 0;font-size:14px;"><a href="mailto:${safeEmail}" style="color:#17A2B8;">${safeEmail}</a></td></tr>
            </table>
            <div style="margin-top:20px;padding:16px;background:#F8FAFB;border-radius:8px;border:1px solid #E6F7FA;">
              <p style="margin:0 0 10px;color:#2C3E50;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Products Interested In</p>
              ${safeProducts.length > 0
                ? safeProducts.map((p) => `<p style="margin:4px 0;color:#2C3E50;font-size:14px;">• ${p}</p>`).join('')
                : '<p style="margin:0;color:#6B7280;font-size:14px;">None selected</p>'}
            </div>
            ${safeMaterial ? `<div style="margin-top:16px;padding:16px;background:#F8FAFB;border-radius:8px;border:1px solid #e2e8f0;"><p style="margin:0 0 8px;color:#2C3E50;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;">Additional Requirements</p><p style="margin:0;color:#2C3E50;font-size:14px;">${safeMaterial}</p></div>` : ''}
          </div>
          <div style="background:#F8FAFB;padding:16px;text-align:center;border-top:1px solid #e2e8f0;">
            <p style="margin:0;color:#6B7280;font-size:12px;">Reply directly to this email to respond to the customer.</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Quote email error:', err);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}
