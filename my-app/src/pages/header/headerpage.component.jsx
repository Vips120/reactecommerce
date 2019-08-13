import React from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../../components/firebase/firebase.util';
import {connect} from 'react-redux';
const Headerpage = ({currentUser}) => {
    return(
     <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
         <Link className="navbar-brand" to="/">VSShop</Link>
         <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
             aria-expanded="false" aria-label="Toggle navigation">
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 
             </button>
         <div className="collapse navbar-collapse" id="collapsibleNavId">
             <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                 <li className="nav-item active">
                     <Link className="nav-link" to="/shop">Shops<span className="sr-only">(current)</span></Link>
                 </li>
                 <li className="nav-item">
                     <Link className="nav-link" to="/contact">Contacts</Link>
                 </li>
               
                
{
    currentUser ?
     <li className="nav-link"
    onClick={() => auth.signOut()}
    >SignOut</li>
    :
    <Link className="nav-link" to="/contact">SignIn</Link>
}
                
             </ul>
             {
            currentUser ?
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item pull-right">
                   hello, {currentUser.displayName}  
                </li>
            </ul>
            :
            ''    
             }

             
         </div>
     </nav>
    )
}
const mapStateToProps = state =>({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Headerpage);