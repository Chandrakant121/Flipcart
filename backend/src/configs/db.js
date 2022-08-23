import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();
//step-1 connection mongodb  
// return the promise
const connect = () => {
    return mongoose.connect(process.env.MONGO_URL)
};

export default connect;