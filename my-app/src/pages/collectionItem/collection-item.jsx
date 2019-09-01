import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';
import './collection-item.css';
const CollectionItem = ({item,addItem}) => {
   const {id,title,price,name,imageUrl} =  item
  return(
        <div className="container">
            <div className="row">
            <div className="col-md-12" key={id}>
              
              <div className="card text-left" >
                <div
                  className="twitter"
                  style={{
                    background: `url(${imageUrl}) no-repeat center center`
                  }}
                >
                  <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text"
                     onClick={() => addItem(item)}
                    >Add Cart</p>
                  </div>

                </div>
              </div>
              <ul className="list-inline">
                      <li>{name}</li>
                      <li>{price} $</li>
                  </ul>
            </div>


            </div>
    
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
  addItem:item => dispatch(addItem(item))
});
export default connect(null,mapDispatchToProps)(CollectionItem);