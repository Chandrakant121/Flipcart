import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getProductsReducer } from "./reducers/productReducer";
import { getProductDetailsReducer } from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer"

// create stote takes 2 args = reducer, middleware
//combineReducers => if we have multiple reducers then we use this 
// we can not pass multiple reducers directly 

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
})

const middleware = [thunk]

const store = createStore(
    reducer, composeWithDevTools(applyMiddleware(...middleware))
)
export default store