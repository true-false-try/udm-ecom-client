import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {fetchCategories} from "../store/action/index.js";

const useProductFilter = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const queryString = searchParams.toString();
        dispatch(fetchCategories(queryString));
    }, [searchParams, dispatch]);
};

export default useProductFilter;
