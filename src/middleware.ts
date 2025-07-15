import { NextResponse, type NextRequest } from 'next/server'
import { verifySession } from './lib/session'

export default async function middleware(req: NextRequest) {
  // 1. Check if route is protected
  const protectedRoutes = ['/profile', '/thank-you']
  const currentPath = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(currentPath)

  if (isProtectedRoute) {
    // 2. Check for valid session
    const token = await verifySession()

    // 3. Redirect unauthed users
    if (!token) {
      return NextResponse.redirect(new URL('/login', req.nextUrl))
    }
  }

  // 4. Render route
  return NextResponse.next()
}

// Routes middleware should *not* run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image).*)'],
}
