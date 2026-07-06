import express from "express";
import { getAllUser, userEntry } from "../controllers/userControllers.js";

const route = express.Router();
route.post("/userentry", userEntry);
route.get("/alluser",getAllUser)

export default route;