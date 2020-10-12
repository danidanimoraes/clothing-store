import { createSelector } from 'reselect';

const selectCart = (state) => (state.cart);

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((accumulator, cartItem) =>
        accumulator + cartItem.quantity,
        0)
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectTotalPrice = createSelector(
    selectCartItems,
    (cartItems) => cartItems.reduce((accumulator, currentItem) =>
        accumulator + currentItem.quantity * currentItem.price,
        0)
);