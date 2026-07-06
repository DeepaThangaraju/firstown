import mongoose from "mongoose";

export const connectDb = async (url) => {
    try {
        await mongoose.connect(url);
        console.log("DB connected")
    } catch (err) {
        console.log("Error while connecting Mongoose",err.message)
    }
}