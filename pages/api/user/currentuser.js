import dbConnect from '../../../lib/Dbconnect'
import User from '../../../models/User'
// import { requireSignin } from '../../../utils/auth'
import { expressjwt } from 'express-jwt'
export default async function handler(req, res) {
  const { method } = req
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        // console.log(requireSignin())
        // console.log(req.headers)
      } catch (error) {
        res.status(400).json({ success: false })
      }
  }
}
