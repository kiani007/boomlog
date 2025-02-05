import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const publicRoutes = ['/', '/sign-in(.*)', '/sign-up(.*)'];
const isPublicRoute = createRouteMatcher(publicRoutes);

export default clerkMiddleware(async (auth, request) => {

  const {userId } = await auth();
 
  if (userId && isPublicRoute(request)) {
    return NextResponse.redirect(new URL('/posts', request.url));
  }
  if (!isPublicRoute(request)) {
    // Protect all other routes
    await auth.protect()
  }

})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}