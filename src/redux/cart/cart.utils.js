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