import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item"></img>
            <div className="details">
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price} = ${quantity * price}</span>
            </div>
        </div>
    );
}

export default CartItem;