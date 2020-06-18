import React from 'react';
import "./style.css";

const Button = ({ onClick, children }) => {
    return (
        <div className="button-div">
            <button onClick={onClick}>
                {children}
            </button>
        </div>
    )
}

export default Button;