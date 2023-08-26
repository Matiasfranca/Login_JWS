import { validate } from "./validate.js";
import { User } from "../models/User.js"
import bcrypt from "bcrypt"
import jsonwebtoken from "jsonwebtoken";

const userControls = {

    login: async (req, res) => {
        const selectedUser = await User.findOne({ email: req.body.email })
        if(!selectedUser) return res.status(400).send("Email or password incorrect")    
        
        if(!bcrypt.compareSync(req.body.password, selectedUser.password)) return res.status(400).send("Email or password incorrect") 

        const token = jsonwebtoken.sign({id: selectedUser._id, email: selectedUser.email, admin: selectedUser.admin}, process.env.SECRET_TOKEN)
        res.header("authorization-token", token).send("User logged")
    },

    register: async (req, res) => {

        const {error} = validate(req.body)
        if (error) return res.status(400).send(error.message)

        if(await User.findOne({ email: req.body.email })) return res.status(400).send("Email already exits")

        try {
            const salt = bcrypt.genSaltSync(10)
            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, salt),
            })

            const savedUser = await user.save();
            res.send(savedUser);
        } catch (error) {
            res.status(400).send(error);
        }
    },

    admin: (req, res) => {
        if (!req.user.admin){ return res.status(401).send("Acess Denied not admin") }

        res.send("WELCOME TO THE MATO admin")
    },

    free: (req, res) => {
        res.send("Oba usuario")
    }

}

export {userControls}