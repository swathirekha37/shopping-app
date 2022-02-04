import { ADD_ITEMS, REMOVE_ITEM_FROM_CART, TOGGLE_HIDDEN_CART } from "./cart-types";
import {toggleCartActions} from "./cart-actions";
import { addItems } from "./cart-actions";
import { addItemsToCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden : true,
    items : []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_HIDDEN_CART:
            return {
                ...state,
                hidden:!state.hidden
            }
        
            case ADD_ITEMS:
                return{
                    ...state,
                    items : addItemsToCart(state.items,action.payload)
                }
            
            case REMOVE_ITEM_FROM_CART:
                return{
                    ...state,
                    items : state.items.filter(item => item.id !== action.payload.id)
                }
        default:
            return state;
    }
};

export default cartReducer;