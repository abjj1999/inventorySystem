import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "../../../lib/Dbconnect";
import User from "../../models/User";
import bcrypt from "bcrypt";


connectDB();
export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        // Add logic here to look up the user from the credentials supplied in db
        const foundUser = await User.findOne({ email })
        // const [state, setState] = useContext(UserContext)
        // console.log("state here",state)
        if (!foundUser) {
            throw new Error('User does not exist')
        }
        const isMatch = await bcrypt.compare(password, foundUser.password)
        if (!isMatch) {
            throw new Error('Invalid credentials')
        }
        // console.log(foundUser._id.toString())
        const user = {email: foundUser.email ,  Id: foundUser._id.toString()}
        // console.log(user)

        return user;
         

        
      },

    }),

  ],
  maxAge: 30 * 24 * 60 * 60, // 30 days

  // Seconds - Throttle how frequently to write to database to extend a session.
  // Use it to limit write operations. Set to 0 to always update the database.
  // Note: This option is ignored if using JSON Web Tokens
  updateAge: 24 * 60 * 60, 
  pages: {
    signIn: "/login",
  },
});
