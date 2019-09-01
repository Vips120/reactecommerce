import React from 'react';
import './cart.component.css';

const Cartitem = ({item:{imageUrl,price,name,quantity}}) => {
    return (<span className="item">
        <span className="item-left">
            <img src={imageUrl} alt='' className="img-responsive" width="50" height="50"/>
            <span className="item-info">
                <span>{name}</span>
                <span>${price} x {quantity}</span>
            </span>
        </span>
        <span className="item-right">
            <button className="btn btn-xs btn-danger pull-right delete-item">x</button>
        </span>
    </span>);
}

export default Cartitem;