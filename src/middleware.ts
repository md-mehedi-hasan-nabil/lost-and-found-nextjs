import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { AuthUser } from './types';
import { jwtDecode } from 'jwt-decode';
import { authKey } from './contants/authKey';

const commonRoutes = ["/report-item", "/recent-lost-item"];
// const userRoutes = ["/user/profile", "/user/claim-requests", "/user/lost-item", "/user/found-item", "/user/change-password", "/user"];
// const adminRoutes = ["/admin/lost-item", "/admin/found-item", "/admin/user-management", "/admin/profile", "/admin/change-password", "/admin"];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const accessToken = request.cookies.get(authKey)?.value;
    
    if (!accessToken) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    let decodedData: AuthUser | null = null;

    try {
        if (accessToken) {
            decodedData = jwtDecode<AuthUser>(accessToken);
        }
    } catch (error) {
        console.error('Failed to decode token:', error);
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if (decodedData) {
        if (commonRoutes.some(route => pathname.startsWith(route))) {
            return NextResponse.next();
        }

        if (decodedData.role === "ADMIN" && pathname.startsWith("/admin")) {
            return NextResponse.next();
        }

        if (decodedData.role === "USER" && pathname.startsWith("/user")) {
            return NextResponse.next();
        }
    }

    return NextResponse.redirect(new URL('/login', request.url));
}

export const config = {
    matcher: ['/admin/:page*', '/user/:page*', '/report-item/:page*', '/recent-lost-item/:page*'],
};
