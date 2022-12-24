import { NextResponse } from "next/server";
import { verify } from "jsonwebtoken";

const secret = process.env.JWT_SECRET;

export default function middleware(req) {
    const { cookies } = req;
    const jwt = cookies.auth;
    const url = req.url;

    if(url.includes('/dashboard') ){
        if(!jwt || jwt === 'undefined'){
            return NextResponse.redirect('/login')
        }

        try {
            verify(jwt, secret);
            return NextResponse.next();
        } catch (error) {
            return NextResponse.redirect('/login')
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: [ '/dashboard/:path*'],
  }