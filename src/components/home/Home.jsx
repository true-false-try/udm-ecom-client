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

            <div className="py-5">
                <div className="flex flex-col justify-center space-y-2">
                    <h1 className="text-2xl font-bold text-gray-900">
                    </h1>
                </div>
                {isLoading ? (
                        <Loader />
                    ):
                    errorMessage ? (
                        <div className="flex justify-center items-center h-[200px]">
                            <FaExclamationTriangle  className="text-state-800 text-3xl mr-2"/>
                            <span className="text-state-800 text-lg font-medium">
                        {errorMessage}
                      </span>
                        </div>
                    ): (
                       <div>
                           <h1 className="text-2xl font-bold text-gray-900">Additional info</h1>
                           <div/>
                    )}
            </div>
        </div>
    );
}

export default Home;