import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../components/firebase/firebase.util";
import './headerpage.component.css';
import { connect } from "react-redux";
import CartItem from '../../components/cart/cart.component';
import Cartdropdown from '../../components/carddropdown/cartdropdown.component';
const Headerpage = ({ currentUser,hidden }) => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        VSShop
      </Link>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="icon-bar" />
        <span className="icon-bar" />
        <span className="icon-bar" />
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/shop">
              Shops<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contacts
            </Link>
          </li>

          {currentUser ? (
            <li className="nav-link" onClick={() => auth.signOut()}>
              SignOut
            </li>
          ) : (
            <Link className="nav-link" to="/contact">
              SignIn
            </Link>
          )}
        </ul>
        {currentUser ? (
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item pull-right">
              hello, {currentUser.displayName}
            </li>
          </ul>
        ) : (
          ""
        )}
        <ul className="nav navbar-nav navbar-right">
<li className="dopdown">
  <CartItem/>
          {
            hidden ? null :
            
            <Cartdropdown/>
          }
 </li>
        </ul>
       
 {/* <form class="form-inline my-2 my-lg-0">
                <div class="input-group input-group-sm">
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" placeholder="Search..."/>
                    <div class="input-group-append">
                        <button type="button" class="btn btn-secondary btn-number">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <a class="btn btn-success btn-sm ml-3">
                    <i class="fa fa-shopping-cart"></i>&nbsp;
                       <span class="badge badge-light">3</span>
                </a>
                
            </form> */}
</div>
    </nav>
  );
};
const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  hidden:state.cart.hidden
});

export default connect(mapStateToProps)(Headerpage);
