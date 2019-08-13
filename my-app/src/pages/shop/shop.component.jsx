import React, {Component} from 'react';
import Shop_Data from './shopdata.js';
import Collectionpreview from '../../components/collection/collection-preview';
class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            collections:Shop_Data
        }
    };
    render(){
        const {collections} = this.state;
        return(
            <div className="container">
                <h3>Shop Page</h3>
                {
                     collections.map(({id, ...items}) => (
                         <Collectionpreview  key={id} {...items}/>
                     ))
                }
            </div>
        )
    }
}

export default ShopPage;