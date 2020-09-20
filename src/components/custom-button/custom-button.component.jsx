import React from 'react';
import './custom-button.styles.scss';

const CustomButton = (props) => {
    return (
        <button className={`custom-button ${props.isGoogleSignIn ? 'google-sign-in' : ''}`} {...props}>
            {props.children}
        </button>
    );
}

export default CustomButton;