import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartIcon = ({ toggleCartHidden }) => {
    return (<div className="cart-icon" onClick={toggleCartHidden}>
        <Icon className="icon" />
        <span className="counter">0</span>
    </div>);
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}
export default connect(null, mapDispatchToProps)(CartIcon);