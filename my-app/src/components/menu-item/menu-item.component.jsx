import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.component.css'
 const Menuitem = ({title,imageUrl,match,linkurl,history}) => {
    console.log(match);
    return(
        <div className="container">
    <div className="card text-left" onClick={() => history.push(`${match.url}${linkurl}`)}> 
        <div className="twitter" style={{background:`url(${imageUrl}) no-repeat center center`}}>
        <div className="card-body"> 
                        <h4 className="card-title">{title}</h4>
                        <p className="card-text">Shop Now</p>
                      </div>
        </div>
    </div>
 
                      </div>
 
    )
}
export default withRouter(Menuitem);