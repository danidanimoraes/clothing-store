import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import { auth } from './../../firebase/firebase.utils.js';

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <div className="first-box">
                <Link to="/" className="logo-container">
                    <Logo className="logo" title="Go to Home"></Logo>
                </Link>
                {currentUser ?
                    <div className="welcome">Hello, {currentUser.displayName}!</div>
                    :
                    null
                }
            </div>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/contact" className="option">
                    CONTACT
                </Link>
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                        :
                        <Link to="/signin" className="option">
                            SIGN IN
                        </Link>
                }
            </div>
        </div>
    );
}

export default Header;