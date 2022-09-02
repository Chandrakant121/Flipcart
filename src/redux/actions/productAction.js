import axios from "axios"
import { GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS } from "../../constants/productConstant"

const URL = "http://localhost:8800"

export const getProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/products`)
        // console.log(res)
        dispatch({ type: GET_PRODUCT_SUCCESS, payload: data })
    }
    catch (err) {
        console.log("err in getProducts", err)
        dispatch({ type: GET_PRODUCT_FAIL, payload: err.message })
    }
}