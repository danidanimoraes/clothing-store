import { CartActionTypes } from './cart.types';

// The reducer doesn't use the payload
export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})