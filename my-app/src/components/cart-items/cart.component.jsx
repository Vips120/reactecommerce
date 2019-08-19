import {React} from 'react';
import './cart.component.css';

const Cartitem = ({item:{imageUrl,price,name,quantity}}) => (
        <span className="item">
        <span className="item-left">
            <img src={imageUrl} alt='' />
            <span className="item-info">
                <span>{name}</span>
                <span>${price} x {quantity}</span>
            </span>
        </span>
        <span className="item-right">
            <button className="btn btn-xs btn-danger pull-right">x</button>
        </span>
    </span>
    )

export default Cartitem;