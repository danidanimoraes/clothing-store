import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ isGoogleSignIn, invertedColor, ...otherProps }) => {
    return (
        <button className={`custom-button ${isGoogleSignIn ? 'google-sign-in' : ''}${invertedColor ? 'inverted' : ''}`} {...otherProps}>
            {otherProps.children}
        </button>
    );
}

export default CustomButton;