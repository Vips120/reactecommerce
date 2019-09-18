import React from 'react';
import './home.css';
import Directory from '../../Directory/directory.component';
const Homepage = () => {
    return(
        <div className="container">
          <div className="row">
            <Directory />
          </div>
        </div>
    )
}

export default Homepage;