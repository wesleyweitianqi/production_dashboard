import express from "express";
import User from "../models/user.js"

const Router =express.Router()

Router.get("/register", async (req, res)=> {
    // const { username, email, password } = req.boby
    // const query = await User.findOne({username})
    // if (!query) {
    //     const user1 = new User({
    //         name: username,
    //         email: email,
    //         password: password
    //     })
    // }
    res.json("ok, hello")
})

export default Router