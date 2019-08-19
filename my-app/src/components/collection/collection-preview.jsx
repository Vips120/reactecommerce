import React from "react";
import CollectionItem from '../../pages/collectionItem/collection-item';
const Collectionpreview = ({ title, items }) => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 col-xs-12 col-lg-12 col-sm-12">
            <h3>{title}</h3>
            </div>

        </div>
      {/* <div className="row">
       
        {items.filter((data,idx) => idx < 4).map(({id, ...otherItemprops}) => (
         <div className="col-md-4" key={id}>
         <CollectionItem key={id} {...otherItemprops} />
         </div>
        ))}
      </div> */}
      {/* using redux */}
   <div className="row">
  
       {items.filter((data,idx) => idx < 4).map((item) => (
        <div className="col-md-4" key={item.id}>
        <CollectionItem key={item.id} item={item} />
        </div>
       ))}
     </div>

    </div>
  );
};

export default Collectionpreview;
