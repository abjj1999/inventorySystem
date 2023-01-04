import dbConnect from '../../../lib/Dbconnect'
import User from '../../../models/User'
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()

  if (method === 'POST') {
    try {
      const { name, email, password } = req.body
      const foundUser = await User.findOne({ email })
      if (foundUser) {
        res.status(400).json({ success: false, message: 'User already exists' })
      }
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      })
      res.status(201).json({ success: true, data: user })
    } catch (error) {
      res.status(400).json({ success: false })
    }
  }
}