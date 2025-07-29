const initialState = {
    cart: [],
    totalPages: 0,
    cartId: null,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CART": {
            const productToAdd = action.payload;
            const existingProduct = state.cart.find(
                (item) => item.id === productToAdd.id
            );

            if (existingProduct) {
                const updatedCart = state.cart.map((item) =>
                    item.id === productToAdd.id ? productToAdd : item
                );
                return {
                    ...state,
                    cart: updatedCart,
                };
            } else {
                const newCart = [...state.cart, productToAdd];
                return {
                    ...state,
                    cart: newCart,
                };
            }
        }

        case "REMOVE_CART": {
            return {
                ...state,
                cart: state.cart.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        }

        default:
            return state;
    }
};
