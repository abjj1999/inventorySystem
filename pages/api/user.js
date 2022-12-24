export default async function (req, res) {
    const {cookies} = req

    const jwt = cookies.auth

    if (!jwt) {
        return res.status(401).json({message: 'Not authorized'})
        
    }

    res.json({message: 'You are authorized'})
}