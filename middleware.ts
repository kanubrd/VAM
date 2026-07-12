import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Security middleware for additional protection
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const pathname = request.nextUrl.pathname;
  const search = request.nextUrl.search;

  // Redirect non-www and legacy domains to primary www.valtrixmaterials.com
  if (!host.includes('localhost') && !host.includes('127.0.0.1') && host !== 'www.valtrixmaterials.com') {
    const newUrl = new URL(pathname + search, 'https://www.valtrixmaterials.com');
    return NextResponse.redirect(newUrl, 301);
  }

  const response = NextResponse.next();

  // Additional security headers
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64');
  
  // Rate limiting detection - block suspicious patterns
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
  const userAgent = request.headers.get('user-agent') || '';
  
  // Block common attack patterns
  const suspiciousPatterns = [
    /\.\.\//, // Path traversal
    /<script/i, // XSS attempts
    /union.*select/i, // SQL injection
    /eval\(/i, // Code injection
    /document\.cookie/i, // Cookie theft attempts
  ];
  
  const url = request.url.toLowerCase();
  const isSuspicious = suspiciousPatterns.some(pattern => pattern.test(url));
  
  if (isSuspicious) {
    console.warn(`🚨 Blocked suspicious request from ${ip}: ${request.url}`);
    return new NextResponse('Forbidden', { status: 403 });
  }
  
  // Block empty or suspicious user agents
  if (!userAgent || userAgent.length < 10) {
    console.warn(`🚨 Blocked request with suspicious user agent from ${ip}`);
    return new NextResponse('Forbidden', { status: 403 });
  }

  // Add security headers (complementary to next.config.mjs)
  response.headers.set('X-Request-ID', crypto.randomUUID());
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  // CORS for API routes only
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const origin = request.headers.get('origin');
    const allowedOrigins = [
      'http://localhost:3000',
      'https://valtrixmaterials.com',
      'https://www.valtrixmaterials.com',
      'https://vamvaltrix.com',
    ];
    
    if (origin && allowedOrigins.includes(origin)) {
      response.headers.set('Access-Control-Allow-Origin', origin);
      response.headers.set('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
      response.headers.set('Access-Control-Max-Age', '86400');
    }
    
    // Handle OPTIONS preflight
    if (request.method === 'OPTIONS') {
      return new NextResponse(null, { status: 204, headers: response.headers });
    }
  }

  return response;
}

// Apply middleware to all routes except static files
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|ico|webp|avif)).*)',
  ],
};
