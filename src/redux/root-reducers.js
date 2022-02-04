import { combineReducers } from "redux";
import cartReducer from "./cart/cart-reducer";
import countReducer from "./count/countReducer";
import userReducer from "./user/user-reducer";

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    count: countReducer
})

export default rootReducer