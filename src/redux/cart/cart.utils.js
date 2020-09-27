export const addToCart = (existingCartItems, newCartItem) => {
    const existingItem = existingCartItems.find((item) => item.id === newCartItem.id);
    if (existingItem) {
        return existingCartItems.map((item) =>
            item.id === newCartItem.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )
    }
    else {
        return [...existingCartItems, { ...newCartItem, quantity: 1 }]
    }
}

export const decreaseQuantity = (existingCartItems, itemToDecrease) => {
    const existingItem = existingCartItems.find((item) => item.id === itemToDecrease.id);
    if (existingItem.quantity > 1) {
        return existingCartItems.map((item) =>
            item.id === itemToDecrease.id
                ? { ...item, quantity: item.quantity - 1 }
                : item
        )
    }
    else {
        return removeItemFromCart(existingCartItems, itemToDecrease)
    }
}

export const removeItemFromCart = (existingCartItems, itemToRemove) => {
    return existingCartItems.filter((item) => item.id !== itemToRemove.id)
}