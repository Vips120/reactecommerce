import React from 'react';
import axios from 'axios';
import qs from 'qs';
import './signup.css';

const Signup = () => {
  let newUser = {
    FirstName:"Mohit",
    LastName:"Kumar",
    EmailId:"h@gmail.com",
    Password:"mohit120"
};
    let userEndPoint = 'http://localhost:3000/api/chat/userRegister';
let  CreateUser =  async () => {
  try {
  let item = await axios.post(userEndPoint, JSON.stringify(newUser),{headers:{'Content-Type': 'application/json'}});
  console.log(item.data);
}
  catch(ex) {
      console.log(ex.message);
  }
};
    return(
        <div className="container">
      <div className="row">
       <div className="col-md-8">
<button type="button" className="btn btn-outline-primary"
onClick={() => CreateUser()}
>SignUp</button>
       </div>

      </div>
      <div className="row">
          <div class="col-lg-1-12">
              <div class="card text-left">
                  
                <div class="card-body">
                  <h4 class="card-title">Title</h4>
                  <p class="card-text">Body</p>
                </div>
              </div>
          </div>
      </div>

        </div>
    )
}

export default Signup;