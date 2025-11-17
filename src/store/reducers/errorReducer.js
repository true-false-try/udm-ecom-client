const initialState = {
    isLoading: false,
    errorMessage: null,
    categoriseLoader: false,
    categoryError: null
};

export const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "IS_FETCHING":
            return {
                ...state,
                isLoading: true,
                errorMessage: null
            }
        case "IS_SUCCESS":
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
        case "CATEGORY_SUCCESS":
            return {
                ...state,
                errorMessage: null,
                categoriseLoader: false,
                categoryError: null
            }
        case "CATEGORY_LOADER":
            return {
                ...state,
                errorMessage: null,
                categoriseLoader: true,
                categoryMessage: null
            }
        default:
            return state;
    }
};