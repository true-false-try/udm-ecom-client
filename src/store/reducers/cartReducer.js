const initialState = {
    cart: [],
    totalPages: 0,
    cartId: null,
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {

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