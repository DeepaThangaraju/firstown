
import { userModel } from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const userEntry = async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body;
        if (!fname || !lname || !email || !password) {
            return res.status(404).json({ message: "Enter all details" })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const isAlreadyExist = await userModel.findOne({ email: email });
        if (isAlreadyExist) {
            return res.status(400).json({ message: "Email already exist. Enter with another email" })
        }
        const newUser = { fname, lname, email, password: hashedPassword };
        const enterUser = await userModel(newUser);
        await enterUser.save();
        return res.status(201).json({ message: "New user created" })
    } catch (err) {
        return res.status(500).json({ message: `${err.message}` })
    }
}

export async function getAllUser (req,res) {
    try {
        const allUser = await userModel.find();
        if (!allUser) {
            return res.status(400).json({message:"User not found"})
        }
        return res.status(200).json({message:"Listed all user",data:allUser})
    } catch (err) {
        return res.status(500).json({ message: `Something went wrong ${err.message}` })
    }
}