import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as Icon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (<div className="cart-icon" onClick={toggleCartHidden}>
        <Icon className="icon" />
        <span className="counter">{itemCount}</span>
    </div>);
}

// selector
const mapStateToProps = (state) => {
    return {
        itemCount: selectCartCount(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);