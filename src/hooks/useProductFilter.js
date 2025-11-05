import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {fetchCategories} from "../store/action/index.js";

const useProductFilter = () => {
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

};

export default useProductFilter;