import dbConnect from '../../../lib/Dbconnect'
import User from '../../../models/User'
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  const { method } = req
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const users = await User.find(
          {},
        ) /* find all the data in our database */
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      break
    case 'PUT':
      try {
      } catch (error) {}
    default:
      res.status(400).json({ success: false })
      break
  }
}
