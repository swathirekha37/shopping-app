import { createSelector } from "reselect";

const selectCart = state => state.cart

export const selectCartItems = createSelector(
   [selectCart], (cart) => cart.items
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    items => items.reduce((accumulator,currentItem)=>accumulator + currentItem.quantity , 0)
)

export const cartItemsTotal = createSelector(
    [selectCartItems],
    items => items.reduce((accumulator,currentItem)=>accumulator + currentItem.quantity*currentItem.price , 0)
)