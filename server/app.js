import express from "express";
import { config } from "dotenv";
import paymentRoute from "./routes/paymentRoute.js";
import cors from "cors"
config({ path: "./config/config.env" })
export const app = express();
app.use("/api", paymentRoute)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
