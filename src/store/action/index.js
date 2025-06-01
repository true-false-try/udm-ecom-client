import api from "../../api/api.js";

export const fetchCategories = (queryString) => async(dispatch) => {
    try {
        dispatch({type:"CATEGORY_LOADER"});
         const {data} = await api.get(`/public/products?${queryString}`);
         dispatch({
             type: "FETCH_CATEGORIES",
             payload: data.content,
             pageNumber: data.pageNumber,
             pageSize: data.pageSize,
             totalElements: data.totalElements,
             totalPages: data.totalPages,
             lastPage: data.lastPage,
         });
         dispatch({type:"IS_ERROR"});
    } catch (error) {
        console.log(error);
        dispatch({
            type:"IS_ERROR",
            payload: error?.response?.data?.message || "Failed to fetch products",
        });

    }
};

export const addToCart = (data, qty = 1) =>
    (dispatch, getState) => {
        // Find the product
        const { products } = getState().products;
        const getProduct = products.find(
            (item) => item.id === data.id
        );

        //Check for stocks
        const isQuantityExist = getProduct.quantity >= qty;

        //If in stock -> add
        if(isQuantityExist){
            dispatch({ type:"ADD_CART", payload: {...data, quantity: qty} });
            localStorage.setItem("cart", JSON.stringify(getState().carts.cart));
        } else {

        }
    };