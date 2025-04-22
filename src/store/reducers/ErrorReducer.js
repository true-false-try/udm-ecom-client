const initialState = {
    isLoading: false,
    errorMessage: null,
};

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "IS_FETCHING":
            return {
                ...state,
                isLoading: true,
                errorMessage: null
            }
        case "IS_SUCCES":
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
            }
        case "IS_ERROR":
            return {
                ...state,
                isLoading: true,
                errorMessage: action.payload,
            }
        default:
            return state;
    }
};