import React from 'react';
import './cartdropdown.component.css';
import  {connect} from 'react-redux';
import Cartitem from '../cart-items/cart.component';
const Cartdropdown = ({cartItems}) => {
    return(
        
  <ul  className="dropdown-menu show dropdown-cart navbar-right "  role="menu">
        {
              cartItems.map(cartItem => (
                  <li>

<Cartitem key={cartItem.id} item={cartItem} />
                  </li>
              ))
        }

        <li className="divider"></li>
        <li><a className="text-center" href="">View Cart</a></li>
    </ul>
    )
}
 const mapstateToprops = ({cart:{cartItems}}) => ({
     cartItems
 })

export default connect(mapstateToprops)(Cartdropdown);