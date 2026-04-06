import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow login page through always
  if (pathname === '/admin/login') {
    return NextResponse.next()
  }

  // Protect all other /admin routes
  if (pathname.startsWith('/admin')) {
    const session = request.cookies.get('admin_session')?.value

    if (!session || session !== process.env.ADMIN_SESSION_SECRET) {
      const loginUrl = new URL('/admin/login', request.url)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/admin/:path*'],
}
