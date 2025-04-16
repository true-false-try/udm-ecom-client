import api from "../../api/api.js";

export const fetchProducts = () => async(dispatch) => {
    try {
         const {data} = await api.get(`/public/products`);
         dispatch({
             type: "FETCH_PRODUCTS",
             payload: data.content
         })
    } catch (error) {
        console.log(error)
    }
}