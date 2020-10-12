import React from 'react';
import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { decreaseQuantity, removeCartItem, addCartItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ cartItem, removeItem, decreaseQuantity, addCartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img alt="item" src={imageUrl}></img>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => decreaseQuantity(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addCartItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            {/* UTF-8 Dingbats */}
            <div className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (item) => dispatch(removeCartItem(item)),
        decreaseQuantity: (item) => dispatch(decreaseQuantity(item)),
        addCartItem: (item) => dispatch(addCartItem(item))
    }
}
export default connect(null, mapDispatchToProps)(CheckoutItem);