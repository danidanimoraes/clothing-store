import React from 'react';
import './cart-item.styles.scss';
import { CartItemContainer, DetailsContainer, ItemImage } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
    return (
        <CartItemContainer>
            <ItemImage src={imageUrl} alt="item"></ItemImage>
            <DetailsContainer>
                <span className="name">{name}</span>
                <span className="price">{quantity} x ${price} = ${quantity * price}</span>
            </DetailsContainer>
        </CartItemContainer>
    );
}

export default CartItem;