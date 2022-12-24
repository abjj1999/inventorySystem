import { serialize } from "cookie"

export default async function (req, res) {
    const {cookies} = req

    const jwt = cookies.auth

    if(!jwt){
        return res.json({message: 'You are not logged in'})
    }
    else{
        const serializedToken = serialize('auth', null, {
            httpOnly: true,
            secure: process.env.NODE_ENV !== 'development',
            sameSite: 'strict',
            maxAge: -1,
            path: '/',
          })
        
            res.setHeader('Set-Cookie', serializedToken)
            res.json({message: 'You are logged out'})
    }
}