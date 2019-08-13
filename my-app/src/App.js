import React,{Component} from 'react';
import {connect} from 'react-redux';
import currentUser from './redux/user/user-action';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route,Switch} from 'react-router-dom';
import Homepage from './pages/home/home';
import ShopPage from './pages/shop/shop.component';
import Headerpage from './pages/header/headerpage.component';
import SignInPage from './pages/signIn/signIn.component';
import {auth} from './components/firebase/firebase.util';

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
  console.log(this.props);
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
      <Route path="/contact" component={SignInPage}/>
      </Switch>
    </div>
  );
  }
}
const mapDispatchprops = dispatch => ({
  currentUser: user => dispatch(currentUser(user))
})
export default connect(null,mapDispatchprops)(App);
