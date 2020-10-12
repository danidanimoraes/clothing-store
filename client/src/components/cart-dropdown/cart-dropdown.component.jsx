import React from 'react';

import CartItem from '../cart-item/cart-item.component';


import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { CartDropdownContainer, CartItemsContainer, EmptyMessage, CartCustomButton } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length ?
                    cartItems.map((item) =>
                        (<CartItem key={item.id} item={item}></CartItem>)
                    )
                    : <EmptyMessage>Your cart is empty.</EmptyMessage>
                }
            </CartItemsContainer>
            <CartCustomButton onClick={() => {
                dispatch(toggleCartHidden());
                history.push("/checkout")
            }}>
                GO TO CHECKOUT
            </CartCustomButton>
        </CartDropdownContainer>
    );
}



export default CartDropdown;