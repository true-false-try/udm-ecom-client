import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchCategories} from "../store/action/index.js";

const UseProductFilter = () => {
    const PAGE = "page";
    const SORT_BY = "sortby";
    const ASC = "asc";
    const KEYWORD = "keyword";
    const PRICE = "price";
    const SORTED_ORDER = "sortOrder";
    const CATEGORY = "category";
    const PAGE_NUMBER = "pageNumber";

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    useEffect(() => {
        const params = new URLSearchParams();
        const currentPage = searchParams.get(PAGE) ?
            Number(searchParams.get(PAGE)) :
            1;

        params.set(PAGE_NUMBER, currentPage - 1);

        const sortOrder = searchParams.get(SORT_BY) || ASC;
        const categoryParams = searchParams.get(CATEGORY) || null;
        const keyword = searchParams.get(KEYWORD) || null;

        params.set(SORT_BY, PRICE);
        params.set(SORTED_ORDER, sortOrder);

        if (categoryParams) {
            params.set(CATEGORY, categoryParams)
        }
        if (keyword) {
            params.set(KEYWORD, keyword)
        }

        const queryString = params.toString();
        console.log("QUERY STRING", queryString);

        dispatch(fetchCategories(queryString));


    }, [dispatch(), searchParams])
};

export default UseProductFilter;