
import User from "../models/user-schema.js"
export const userSignup = async (req, res) => {
    try {
        //====================Username check in db==================
        const exist = await User.findOne({ username: req.body.username })
        if (exist) {
            return res.status(401).json({ message: "username already exist" })
        }
        //=====================================
        const user = req.body
        const newUser = new User(user)
        await newUser.save()
        res.status(200).json({ message: user })
        // console.log(req.body)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}