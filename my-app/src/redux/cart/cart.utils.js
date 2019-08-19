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
}
