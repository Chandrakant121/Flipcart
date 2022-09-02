import { GET_PRODUCT_SUCCESS, GET_PRODUCT_FAIL } from "../../constants/productConstant"

export const getProductsReducer = (state = { product: [] }, action) => {
    switch (action.type) {
        case GET_PRODUCT_SUCCESS:
            return { producs: action.payload }

        case GET_PRODUCT_FAIL:
            return { err: action.payload }

        default:
            return state
    }
}