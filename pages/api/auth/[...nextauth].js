import NextAuth, {NextAuthOptions} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export default NextAuth({
    session: {
        strategy: 'jwt',
    }, 
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                
            },
            async authorize(credentials, req) {
                const { email, password } = credentials
                // Add logic here to look up the user from the credentials supplied in db
                if (email !== "test2@test.com" || password !== "test") {
                    return null
                }
                return {id: "1", name: "test", email: "test2@test.com"}
            }
        })
    ], 
    pages:{
        signIn: '/login',
    }
})