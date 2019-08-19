import React from 'react';
import './cart.component.css';
import Cartdropdown from '../carddropdown/cartdropdown.component';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';

const CartItem = ({toggleCartHidden}) => {
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
           <span className="badge badge-light">3</span>
    </a>    
    {/* <Cartdropdown/> */}
</form>

)
}
const mapdispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null,mapdispatchToProps)(CartItem);