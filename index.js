import express from "express";
import "dotenv/config";
import { connectDb } from "./connection/connectDb.js";
import userRoutes from "./routes/userRoutes.js";
const port = process.env.port || 9000;



connectDb(process.env.url)
const app = express();

app.use(express.json());
app.use("/api/user",userRoutes)
app.listen(port, () => {
    console.log("Server running on the port,",port)
})