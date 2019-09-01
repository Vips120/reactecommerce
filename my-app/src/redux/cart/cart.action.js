import CartActionTypes from "./cart.type";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeItemCart = item=> ({
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload:item
});

export const removeItem = item =>({
    type: CartActionTypes.REMOVE_ITEM_FROM_CHECKOUT,
    payload:item
})