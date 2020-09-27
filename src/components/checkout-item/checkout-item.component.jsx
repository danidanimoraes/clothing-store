import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { removeCartItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl}></img>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">${price}</span>
            {/* UTF-8 Dingbats */}
            <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (item) => dispatch(removeCartItem(item))
    }
}
export default connect(null, mapDispatchToProps)(CheckoutItem);