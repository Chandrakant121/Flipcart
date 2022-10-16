import axios from "axios";

const URL = 'http://localhost:5000';

export const authenticateSignup = async (data) => {
    try {
        return await axios.post(`${URL}/signup`, data)
    }
    catch (err) {
        console.log("err in signup api", err)
    }
}

export const authenticateLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data)
    }
    catch (err) {
        console.log("err in login api", err)
        return err.res;
    }
}