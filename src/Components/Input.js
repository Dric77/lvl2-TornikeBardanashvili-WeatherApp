import React, { useState } from "react";
import '../App.scss';

const Input = ({input, setInput}) => {

    let handleChange = (e) => {
          setInput(e.target.value)
    }

    return(
            <input
                className="search-input" 
                placeholder="enter city"
                value={input}
                onChange={handleChange}
            />
    )
};

export default Input;