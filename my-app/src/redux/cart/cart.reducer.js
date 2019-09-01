import CartActionTypes from './cart.type';
import {addItemToCart,removeItemToCart} from './cart.utils';
const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
};

const cartReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
                return{
                    ...state,
                    hidden: !state.hidden
                };
                case CartActionTypes.ADD_ITEM:
                    return{
                        ... state,
                        //    cartItems:[...state.cartItems, action.payload]
                        cartItems:addItemToCart(state.cartItems, action.payload)
                    };
                    case CartActionTypes.REMOVE_ITEM_FROM_CART:
                        return {
                            ...state,
                            cartItems:state.cartItems.filter( data => data.id !== action.payload.id)
                        };
                        case CartActionTypes.REMOVE_ITEM_FROM_CHECKOUT: 
                        return {
                            ...state,
                            cartItems: removeItemToCart(state.cartItems, action.payload)
                        };
                default: return state
    }
};
export default cartReducer;