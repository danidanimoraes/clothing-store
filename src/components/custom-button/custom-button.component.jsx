import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ isGoogleSignIn, ...otherProps }) => {
    return (
        <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}`} {...otherProps}>
            {otherProps.children}
        </button>
    );
}

export default CustomButton;