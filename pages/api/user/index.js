import User from "../../models/User"


export default async function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'POST':
            // Get data from your database
            const user = await User.findOne({ email: req.body.email }).select('-password')
            console.log(user)

            res.status(200).json({ success: true})

    }
  }
  