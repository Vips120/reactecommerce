import React from 'react';
import './cartdropdown.component.css';
import  {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Cartitem from '../cart-items/cart.component';
import {selectcartItems} from '../../redux/cart/cart.selector';
import {toggleCartHidden} from '../../redux/cart/cart.action';

import {createStructuredSelector} from 'reselect';
const Cartdropdown = ({cartItems,history,dispatch}) => {
// console.log('otherprops....', otherprops);
// console.log('fdsfsdfdsf',cartHidden());
    return(
        

  <ul  className="dropdown-menu show dropdown-cart navbar-right"  role="menu">
        {
              cartItems.length ?
              cartItems.map(cartItem => (
                  <li key={cartItem.id}>

<Cartitem key={cartItem.id} item={cartItem} />
                  </li>
              ))

              :
              <h3 style={{'fontSize':'15px'}}>Cart is empty</h3>
        }

        <li className="divider"></li>
        <li><a className="text-center" 
        onClick={() => {
            history.push('/checkout');
             dispatch(toggleCartHidden())
        } 
        }
        >Go to checkout</a></li>
    </ul>
    )
}
const mapstateToprops = createStructuredSelector({
    cartItems:selectcartItems
})

//  const mapstateToprops = ({cart:{cartItems}}) => ({
//      cartItems
//  })

export default withRouter(connect(mapstateToprops)(Cartdropdown));