import HeroBanner from "./HeroBanner.jsx";
import ProductCard from "../shared/ProductCard.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchCategories} from "../../store/action/index.js";
import Loader from "../shared/Loader.jsx";
import {FaExclamationTriangle} from "react-icons/fa";

const Home = () => {
    const{ isLoading, errorMessage } = useSelector(
        (state) => state.errors
    );
    const dispatch = useDispatch();
    const {products} = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchCategories())
    },[dispatch]);



export default Home;