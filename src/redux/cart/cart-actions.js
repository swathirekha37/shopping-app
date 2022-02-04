
import  {ADD_ITEMS, REMOVE_ITEM_FROM_CART}  from "./cart-types"
import {TOGGLE_HIDDEN_CART}  from "./cart-types"

export const toggleCartActions =()  =>{
    return {
        type : TOGGLE_HIDDEN_CART,
        
    }
}

export const addItems =(item)  =>{
    return {
        type : ADD_ITEMS,
        payload:item
    }
}

export const removeItemFromCart = item => {
    return {
        type : REMOVE_ITEM_FROM_CART,
        payload : item
    }
}