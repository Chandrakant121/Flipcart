import express from "express";
import connect from "./src/configs/db.js"
import defaultData from "./default.js"
import Router from "./src/routes/route.js"
import cors from "cors"
import bodyParser from "body-parser";

const app = express()
app.use(express.json());
app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router)


const PORT = 8800

app.listen(PORT, async () => {
    try {
        await connect();
        console.log("Well Done Listening On PORT 8800")
    }
    catch (err) {
        console.log(err)
    }
})

defaultData()
