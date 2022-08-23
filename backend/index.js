import express from "express";
import connect from "./src/configs/db.js"
import defaultData from "./default.js"
const app = express()
app.use(express.json());


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
