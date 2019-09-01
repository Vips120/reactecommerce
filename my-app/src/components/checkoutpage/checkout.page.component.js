import React from 'react';
import {connect} from 'react-redux';
import {removeItemCart,addItem, removeItem} from '../../redux/cart/cart.action';

let Checkoutitem = ({data,removeItemcart,addItem,removeitem}) => {
	let {name,imageUrl,price,quantity} = data;
	// console.log('hey....',otherprops);
	let productImage = {
		width: '150px',
		height: '150px',
		position: 'relative',
		left: '100px'
	};
    return (
        
        <tbody>
		<tr >
		<td data-th="Product">
			<div className="row">
				<div className="col-sm-2 hidden-xs" align="center"><img src={imageUrl} alt={name} title={name} className="img-responsive"
				style={productImage}
				/></div>
			</div>
		</td>
		<td data-th="Price">${name}</td>
		<td data-th="Price">${price}</td>
		<td data-th="Quantity">
			<i className="fa fa-chevron-circle-up" aria-hidden="true"
			onClick={() => removeitem(data)}
			></i>
			<h3>{quantity}</h3>
			<i className="fa fa-chevron-circle-down" aria-hidden="true"
				onClick={() =>addItem(data)}
			></i>
		</td>
		<td data-th="Subtotal" className="text-center">{price * quantity}</td>
		<td className="actions" >
			<button className="btn btn-success btn-sm btn-sm1"><i className="fa fa-refresh"></i></button>
			<button className="btn btn-danger btn-sm btn-sm1"
			onClick={() => removeItemcart(data)}
			><i className="fa fa-trash-o"></i></button>								
		</td>
	</tr>
	
	</tbody>
    )
}

const mapDispatchToProps = dispatch => ({
	removeItemcart : item => dispatch(removeItemCart(item)),
	addItem : item => dispatch(addItem(item)),
	removeitem : item => dispatch(removeItem(item))
}) 

export default connect(null,mapDispatchToProps)(Checkoutitem);