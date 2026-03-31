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

    return (
        <div className="lg:px-14 sm:px-8 px-4">
            <div className="py-6">
                <HeroBanner />
            </div>

        </div>
    );
}

export default Home;