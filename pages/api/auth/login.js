import dbConnect from '../../../lib/Dbconnect'
import User from '../../../models/User'
import bcrypt from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { serialize } from 'cookie'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  if (method === 'POST') {
    try {
      const { email, password } = req.body
      const foundUser = await User.findOne({ email })
      if (!foundUser) {
        res.status(400).json({ success: false, message: 'User does not exist' })
      }
      const isMatch = await bcrypt.compare(password, foundUser.password)
      if (!isMatch) {
        res.status(400).json({ success: false, message: 'Invalid credentials' })
      }

      const token = sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60, // 1 minute
          _id: foundUser._id,
          name: foundUser.name,
        }, 
        process.env.JWT_SECRET,

      )

      const serializedToken = serialize('auth', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        maxAge: 60,
        path: '/',
      })

      res.setHeader('Set-Cookie', serializedToken)

     
      foundUser.password = undefined
      res.status(200).json({ success: true, data: foundUser, token })
    } catch (err) {
      res.status(400).json({ success: false, err })
      console.log(err)
    }
  }
}
