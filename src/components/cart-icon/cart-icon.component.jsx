import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { CartIconContainer, CartIconIcon, Counter } from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (<CartIconContainer onClick={toggleCartHidden}>
        <CartIconIcon className="icon" />
        <Counter>{itemCount}</Counter>
    </CartIconContainer>);
}

// selector
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartCount
})

const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);