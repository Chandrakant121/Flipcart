import User from "../models/user-schema.js"
import jwt from "jsonwebtoken"
// import "dotenv"

const generateToken = (user) => {
    // console.log(user, token)
    return jwt.sign({ user }, "fma");
};


export const userSignup = async (req, res) => {
    try {
        //====================Username check in db==================


        let user = await User.findOne({ username: req.body.username }).lean().exec()
        if (user) {
            return res.status(401).send({ message: "username already exist" })
        }
        //=====================================
        else {
            const token = generateToken(user);
            user = await User.create(req.body);
            console.log(token)
            return res.status(200).json({ user: user, token: token, status: true })
        }
        // const user = req.body
        // const newUser = new User(user)
        // await newUser.save()
        // res.status(200).json({ message: user })
        // console.log(req.body)
    }
    catch (err) {
        res.status(400).send({ message: err.message })
    }
}

export const userLogin = async (req, res) => {
    try {

        let user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).send({ message: "Wrong username or Password", status: false });
        }
        //if username present check pass
        let pass = user.checkPassword(req.body.password);
        // if it doesn't match then err
        if (!pass) {
            return res.status(400).send({ message: "Wrong username or Password", status: false });
        }
        // if it matches then send res
        const token = generateToken(user);
        // console.log(user, token)
        return res.status(200).send({ data: user, token: token, status: true });
        // syore token in cookie expiresin 30 days
        // return res.cookie("jwttoken", token, {
        //     expire: new Date(Date.now + 25892000000),
        //     httpOnly: true
        // })
    }

    catch (err) {
        res.status(400).send(err.message)
    }
}