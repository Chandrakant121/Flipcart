import axios from "axios"
import { ADD_TO_CART, ADD_TO_CART_ERROR, REMOVE_FROM_CART } from "../constants/cartConstatnt";

const URL = "https://flipcartapp121.herokuapp.com"
export const addToCart = (id, quantity) => async (dispatch) => {
    try {
        const { data } = await axios.get(`${URL}/product/${id}`);
        // console.log(data)
        dispatch({ type: ADD_TO_CART, payload: { ...data, quantity } })
    }
    catch (err) {
        dispatch({ type: ADD_TO_CART_ERROR, payload: err.message })
    }

}

export const removeFromCart = (id) => (dispatch) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id })
}