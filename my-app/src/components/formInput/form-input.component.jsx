import React from 'react';

const Forminput = ({changeHandle,placeholder}) => {
    return(
        <input
         placeholder={placeholder} 
         onChange={changeHandle}
         className="form-control"
         />
    )
}

export default Forminput;