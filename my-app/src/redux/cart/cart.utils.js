export const addItemToCart = (cartItems,cartItemToAdd) => {
    const cartexsitingItem = cartItems.find(data => data.id === cartItemToAdd.id);
    if(cartexsitingItem){
        return cartItems.map(cartItem => (
            cartItem.id === cartItemToAdd.id
            ?
               {...cartItem,quantity:cartItem.quantity + 1}
               :
               {cartItem}

        ))
    }
    return [...cartItems, {...cartItemToAdd,quantity:1}]
};

export const removeItemToCart = (cartItems, cartItemToRemove) => {
    const exsitingcartItem = cartItems.find(data => data.id === cartItemToRemove.id);
    if(exsitingcartItem.quantity === 1 ) {
        return cartItems.filter(item => item.id !== cartItemToRemove.id)
    }
    return cartItems.map(carItem => (
        carItem.id === cartItemToRemove.id ? {...carItem , quantity: carItem.quantity - 1} : {carItem}
    ))
};
