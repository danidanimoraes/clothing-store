import { addCartItem } from './cart.actions';
import { CartActionTypes } from './cart.types';
import { addToCart } from './cart.utils.js';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const CartReducer = (prevState = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...prevState,
                hidden: !prevState.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...prevState,
                cartItems: addToCart(prevState.cartItems, action.payload)
            }
        default:
            return prevState;
    }
}

export default CartReducer;