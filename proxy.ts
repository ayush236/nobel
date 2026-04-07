import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow login page through always
  if (pathname === '/nea-secure-2068/admin-portal') {
    return NextResponse.next()
  }

  // Protect all other secure routes
  if (pathname.startsWith('/nea-secure-2068/dashboard')) {
    const session = request.cookies.get('admin_session')?.value

    if (!session || session !== process.env.ADMIN_SESSION_SECRET) {
      const loginUrl = new URL('/nea-secure-2068/admin-portal', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/nea-secure-2068/dashboard', '/nea-secure-2068/dashboard/:path*'],
}
