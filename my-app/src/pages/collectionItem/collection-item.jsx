import React from 'react';
const CollectionItem = ({id,title,price ,name,imageUrl}) => {
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
                    <p className="card-text">Add Cart</p>
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

export default CollectionItem;