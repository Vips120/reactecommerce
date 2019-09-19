import React, {Component} from 'react';
import Forminput from '../../components/formInput/form-input.component';
import {signInwithGoogle} from '../../components/firebase/firebase.util';
import './signIn.component.css';
import {Link} from 'react-router-dom';
class SignInPage extends Component {
         constructor(props){
             super(props);
             this.state = {
                 email:'',
                 password:''
             };
         }
    handleSubmit = (event) => {
        event.preventDefault();
     this.setState({email: '', password:''})
    };
    changeHandle = (event) => {
        const {name,value} = event.target;
        this.setState({[name]:value})
    }
    render(){
    return(
        <div className="container">
<div className="card bg-light">
<article className="card-body mx-auto" style={{"maxWidth": '400px'}}>
	<h4 className="card-title mt-3 text-center">Create Account</h4>
	<p className="text-center">Get started with your free account</p>
	<p
    onClick={signInwithGoogle}
    >
		<a  className="btn btn-block btn-google"> <i className="fa fa-google" aria-hidden="true"></i> Login via Google</a>
	</p>
	<p className="divider-text">
        <span className="bg-light">OR</span>
    </p>
	<form onSubmit={this.handleSubmit}>
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
		 </div>
        <Forminput
         name="email"
         type="email"
         className="form-control"
          placeholder="Email address" 
         changeHandle={this.changeHandle}
         value={this.state.email}
         />
         
    </div>
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <Forminput className="form-control"
         placeholder="Create password" 
        type="password"
         name="password"
         value={this.state.password}
         onChange={this.changeHandle}
        />
    </div>                      
        <button type="submit" className="btn btn-primary btn-block form-control"> Create Account  </button>
    <p className="text-center">Have an account? <Link to="/signup">Sign Up</Link> </p>                                                          
</form>
</article>
</div> 
</div>
    )}
}

export default SignInPage;