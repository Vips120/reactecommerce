import {createSelector} from 'reselect';
const createcartItems = state => {
 console.log('hey state', state);
     return state.cart
};

export const selectcartItems = createSelector(
[createcartItems],
items => items.cartItems
);

export const cartHidden = createSelector(
    [createcartItems],
    cart => cart.hidden 
);

export const selectcartitemsCount = createSelector(
          [selectcartItems],
   items => items.reduce((currentquantity,item) => currentquantity + item.quantity,0)
);

export const selectcartitemsCountlength = createSelector(
    [selectcartItems],
    items => items.reduce((currentquantity,item) => currentquantity + item.quantity * item.price, 0)
);