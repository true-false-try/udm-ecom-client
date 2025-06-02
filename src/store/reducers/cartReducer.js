const initialState = {
    cart: [],
    totalPages: 0,
    cartId: null,
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART":
            const product = action.payload;
            const existingProduct = state.cart.find(
                (item) => item.id === product.id
            );

            if (existingProduct) {
                const updatedCart = state.cart.map((item) => {
                    if (item.id === productToAdd.id) {
                        return productToAdd;
                    } else {
                        return item;
                    }
                });
                return {
                    ...state,
                    carts: updatedCart,
                }
            } else {
                const newCart = [...state.cart, id];
                return {
                    ...state,
                    carts: newCart,
                }
            }


    }
}