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


        case "REMOVE_CART":
            return {
                ...state,
                cart: state.cart.filter(
                    (item) =>  item.id !== action.payload.id
                ),
            }
        default:
            return state;
    }
}