import React from 'react';
import './cart.component.css';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import {selectcartitemsCount} from '../../redux/cart/cart.selector';
     
const CartItem = ({toggleCartHidden,itemCount}) => {
    console.log('hello....', itemCount);
    return(
        <form className="form-inline">
    {/* <div className="input-group input-group-sm">
        <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search..."/>
        <div className="input-group-append">
            <button type="button" className="btn btn-secondary btn-number">
                <i className="fa fa-search"></i>
            </button>
        </div>
    </div> */}
    <a className="btn btn-danger btn-sm ml-3" onClick={toggleCartHidden}>
        <i className="fa fa-shopping-cart"></i>&nbsp;
           <span className="badge badge-light">{itemCount}</span>
    </a>    
    {/* <Cartdropdown/> */}
</form>

)
}
const mapdispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapstateToProps = state =>({
    itemCount: selectcartitemsCount(state)
});
// const mapstateToProps = ({cart:{cartItems}}) =>({
// itemCount:cartItems.reduce((currentquantity,item) => currentquantity + item.quantity,0)
// });

export default connect(mapstateToProps,mapdispatchToProps)(CartItem);