import api from "../../api/api.js";
import {dispatch} from "react-hot-toast/src/core/store.js";


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
export const addToCart = (data, qty = 1, toast) =>
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
            toast.success(`${data?.productName} added to cart`)
            localStorage.setItem("cart", JSON.stringify(getState().carts.cart));
        } else {
            toast.error("Out of stock")
        }
    };

export const increaseCartQuantity =
    (data, toast, currentQuantity, setCurrentQuantity) =>
        (dispatch, getState) => {
            const {products} = getState().products;
            const getProduct = products.find(
                (item) => item.id === data.id
            );

            const isQuantityExist =  getProduct.quantity >= currentQuantity + 1;

            if (isQuantityExist) {
                const newQuantity = currentQuantity + 1;
                setCurrentQuantity(newQuantity);

                dispatch({
                    type: "ADD_CART",
                    payload: {...data, quantity: newQuantity + 1},
                })

                localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));

            } else {
                toast.error("Quantity Reached to Limit");
            }
        };

export const decreaseCartQuantity =
    (data, newQuantity) => (dsipatch, getState) => {
        dispatch({
            type: "ADD_CART",
            payload: {...data, quantity: newQuantity},
        })
        localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
    };
export const removeFromCart =
    (data, toast) => (dispatch, getState) => {
        dispatch({type:"REMOVE_CART", payload: data})
        toast.success(`${data.productName} remove from cart`);
        localStorage.setItem("cartItems", JSON.stringify(getState().carts.cart));
    }

export const authenticateSignInUser = (sendData, toast, reset, navigate, setLoader) => async (dispatch) => {
    try {
        setLoader(true);
        const {data} = await api.post("/auth/signin", sendData);
        dispatch({
            type: "LOGIN_USER",
            payload: data
        });
        localStorage.setItem("auth", JSON.stringify(data));
        reset();
        toast.success("Login Success");
        navigate("/");
    } catch (error) {
        console.log(error);
        toast.error(error.response.data.message || "Internal Server Error")
    } finally {
        setLoader(false);
    }

    export const registerNewUser = (sendData, toast, reset, navigate, setLoader) => async (dispatch) => {
        try {
            setLoader(true);
            const {data} = await api.post("/auth/signup", sendData);
            dispatch({
                type: "LOGIN_USER",
                payload: data
            });
            localStorage.setItem("auth", JSON.stringify(data));
            reset();
            toast.success(data?.message || "User Registered Successfully");
            navigate("/login");
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message || error?.response?.data?.password || "Internal Server Error")
        } finally {
            setLoader(false);
        }
    }

}

export const logOutUser = (navigate) => (dispatch) => {
    dispatch({type:"LOG_OUT"});
    localStorage.removeItem("auth");
    navigate("login");

}


