import axios from "axios";

const URL = 'http://localhost:8800';

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data)
    }
    catch (err) {
        console.log("err in signup api", err)
    }
}