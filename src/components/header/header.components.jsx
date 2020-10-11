import React from 'react';
import { ReactComponent as Logo } from './../../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from './../cart-icon/cart-icon.component'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, FirstBoxContainer, OptionsContainer, WelcomeContainer, OptionLink } from './header.styles';
import CartDropdownReduxContainer from '../cart-dropdown/cart-dropdown.container';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => {
    return (
        <HeaderContainer>
            <FirstBoxContainer>
                <OptionLink to="/">
                    <Logo className="logo" title="Go to Home"></Logo>
                </OptionLink>
                {currentUser ?
                    <WelcomeContainer>Hello, {currentUser.displayName}!</WelcomeContainer>
                    : null
                }
            </FirstBoxContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {
                    currentUser ?
                        <OptionLink as="div" onClick={signOutStart}>
                            SIGN OUT
                        </OptionLink>
                        :
                        <OptionLink to="/signin">
                            SIGN IN
                        </OptionLink>
                }
                <CartIcon></CartIcon>
            </OptionsContainer>
            {
                hidden ? null : (<CartDropdownReduxContainer></CartDropdownReduxContainer>)
            }
        </HeaderContainer>
    );
}

// old implementation to show nested de-structuring
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => {
//     return {
//         currentUser: currentUser,
//         hidden: hidden
//     }
// }

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch) => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);