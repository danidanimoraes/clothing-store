import { CartActionTypes } from './cart.types';

// The reducer doesn't use the payload
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});

export const removeCartItem = (item) => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
});

export const decreaseQuantity = (item) => ({
    type: CartActionTypes.DECREASE_QUANTITY,
    payload: item
})

export const clearOutCart = () => ({
    type: CartActionTypes.CLEAR_OUT_CART
})