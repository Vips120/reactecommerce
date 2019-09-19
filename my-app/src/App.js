import React,{Component} from 'react';
import {connect} from 'react-redux';
import currentUser from './redux/user/user-action';
import {currentUsers,allUsers} from './redux/user/user.selector';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch,Redirect} from 'react-router-dom';
import Homepage from './pages/home/home';
import ShopPage from './pages/shop/shop.component';
import Headerpage from './pages/header/headerpage.component';
import SignInPage from './pages/signIn/signIn.component';
import {auth} from './components/firebase/firebase.util';
import Checkoutpage from './pages/checkoutpages/checkoutpages';
import {createStructuredSelector} from 'reselect';
import SignUpComponent from './components/signup/signup.component';


class App extends Component {
  constructor(props){
         super(props);
        //  this.state = {
        //    currentUser:null
        //  }
  };
  unsubscribeFromAuth = null;
  componentDidMount(){
this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
  // this.setState({currentUser: user});
  console.log('dsdfdfdf',this.props);
  this.props.currentUser(user);
})};
componentWillUnmount(){
  this.unsubscribeFromAuth();
}

  render(){
  return (
    <div className="App">
      <Headerpage/>
      <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route path="/shop" component={ShopPage}/>
      <Route path="/checkout" component={Checkoutpage}/>
      <Route exact path="/contact" render={() => this.props.setcurrentUser ? (<Redirect to="/" />) : (<SignInPage/>) }></Route>
      <Route exact path="/signup" component={SignUpComponent}/>
      </Switch>
    </div>
  );
  }
}
const mapStateprops = createStructuredSelector({
   user:allUsers,
  setcurrentUser: currentUsers
});


//  const mapStateprops = ({user}) => ({
//    user:user,
//    setcurrentUser: user.currentUser
//  });

const mapDispatchprops = dispatch => ({
  currentUser: user => dispatch(currentUser(user))
})
export default connect(mapStateprops,mapDispatchprops)(App);
