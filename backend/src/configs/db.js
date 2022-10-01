import mongoose from "mongoose";
// import dotenv from "dotenv"
// dotenv.config();
//step-1 connection mongodb  
// return the promise
const connect = () => {
    return mongoose.connect("mongodb+srv://flipcart:121@cluster0.6nvp6ts.mongodb.net/?retryWrites=true&w=majority")
};

export default connect;