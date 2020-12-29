import React from "react";
import App from "../../App";

export const Header =  props => {
    
    return (
        
        <div className="header container">
        <span>make yourself at home in:</span>
        <h1>Wolfies Awesome Photo List</h1>
        </div>

        
       
    )
};

export const HeaderBlank = props => {
    return (
        <div className='header blank'>
        <h1></h1>
        </div>
    )
}

export default App;