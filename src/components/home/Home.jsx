import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaExclamationTriangle } from "react-icons/fa";

import HeroBanner from "./HeroBanner.jsx";
import ProductCard from "../shared/ProductCard.jsx";
import Loader from "../shared/Loader.jsx";
import { fetchCategories } from "../../store/action/index.js";

const Home = () => {
    const dispatch = useDispatch();

    const { isLoading, errorMessage } = useSelector((state) => state.errors);
    const { products } = useSelector((state) => state.products);

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);

    return (
        <div className="px-4 sm:px-8 lg:px-14">
            <div className="py-6">
                <HeroBanner />
            </div>

            <div className="py-5">
                <div className="flex flex-col justify-center space-y-2">
                    <h1 className="text-2xl font-bold text-gray-900">
            <span className="text-slate-800">
              Discover our handpicked selection of top-rated items just for you!
            </span>
                    </h1>
                </div>

                {isLoading ? (
                    <Loader />
                ) : errorMessage ? (
                    <div className="flex justify-center items-center h-[200px] text-red-700">
                        <FaExclamationTriangle className="text-3xl mr-2" />
                        <span className="text-lg font-medium">{errorMessage}</span>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
                        {products?.slice(0, 8).map((item, index) => (
                            <ProductCard key={index} {...item} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;