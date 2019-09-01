import React from 'react';
import './checkoutpages.css';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectcartItems,selectcartitemsCountlength } from '../../redux/cart/cart.selector';
import Checkoutitem from '../../components/checkoutpage/checkout.page.component'
const Checkoutpage = ({cartItems,total,...otherprops}) => {
	console.log('hey men.......',otherprops);
	// console.log('cartItems', cartItems);
	// console.log('total', total);
    return(
        <div className="container">
          
	<table id="cart" className="table table-hover table-condensed">
    				<thead>
						<tr>
							<th style={{'width':'50%'}}>Product</th>
                            <th style={{width:'40%'}}>Description</th>
							<th style={{width:'10%'}}>Price</th>
							<th style={{width:'8%'}}>Quantity</th>
							<th style={{width:'22%'}} className="text-center">Subtotal</th>
							<th style={{width:'10%'}}></th>
						</tr>
					</thead>
				
{
	cartItems.map(cartItem => (
<Checkoutitem key={cartItem.id} data={cartItem}/>


	// 	<tbody key={cartItem.id}>
	// 	<tr >
	// 	<td data-th="Product">
	// 		<div className="row">
	// 			<div className="col-sm-2 hidden-xs"><img src={cartItem.imageUrl} alt={cartItem.name} title={cartItem.name} className="img-responsive"
	// 			style={{"width": '50px'}}
	// 			/></div>
	// 		</div>
	// 	</td>
	// 	<td data-th="Price">${cartItem.name}</td>
	// 	<td data-th="Price">${cartItem.price}</td>
	// 	<td data-th="Quantity">
	// 		<i className="fa fa-chevron-circle-up" aria-hidden="true"></i>
	// 		<h3>{cartItem.quantity}</h3>
	// 		<i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
	// 	</td>
	// 	<td data-th="Subtotal" className="text-center">{cartItem.price * cartItem.quantity}</td>
	// 	<td className="actions" >
	// 		<button className="btn btn-success btn-sm btn-sm1"><i className="fa fa-refresh"></i></button>
	// 		<button className="btn btn-danger btn-sm btn-sm1"><i className="fa fa-trash-o"></i></button>								
	// 	</td>
	// </tr>
	
	// </tbody>
	))


}

					<tfoot>
						{/* <tr className="visible-xs">
							<td className="text-center"><strong>Total 1.99</strong></td>
						</tr> */}
						<tr>
							<td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
							<td  className="hidden-xs"></td>
							<td className="hidden-xs text-center"><strong>Total ${total}</strong></td>
							<td><a  className="btn btn-success btn-block1">Checkout </a>
                            <i className="fa fa-angle-right"></i>
                            </td>
						</tr>
					</tfoot>
				</table>
</div>

    )
};
const mapstateToprops =createStructuredSelector({
	cartItems: selectcartItems,
	total:selectcartitemsCountlength
})

export default connect(mapstateToprops)(Checkoutpage);
