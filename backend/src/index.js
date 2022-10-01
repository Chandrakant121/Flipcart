import express from "express";
import defaultData from "../default.js"
import Router from "./routes/route.js"
import cors from "cors"
import bodyParser from "body-parser";

const app = express()
app.use(express.json());
app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router)

defaultData()

export default app