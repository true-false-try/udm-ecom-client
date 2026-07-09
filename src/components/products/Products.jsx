import ProductCard from "../shared/ProductCard.jsx";
import {FaExclamationTriangle} from 'react-icons/fa';
import {useSelector} from "react-redux";
import Filter from "./Filter.jsx";
import useProductFilter from "../../hooks/useProductFilter.js";
import Loader from "../shared/Loader.jsx";
import CustomPagination from "../shared/CustomPagination.jsx";

const Products = () => {
    const {isLoading, errorMessage} = useSelector((state) => state.errors);

    useProductFilter();

    const {products, pagination} = useSelector((state) => state.products);

    return (
        <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
            <Filter />
            {isLoading ? (
                <Loader text="Products Loading..." />
            ) : errorMessage ? (
                <div className="flex justify-center items-center h-[200px]">
                    <FaExclamationTriangle className="text-slate-800 text-3xl mr-2"/>
                    <span className="text-slate-800 text-lg font-medium">
                        {errorMessage}
                    </span>
                </div>
            ) : (
                <div className="min-h-[700px]">
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-6 gap-x-6 mt-6">
                        {products && products.map((item, i) => <ProductCard key={i} {...item} />)}
                    </div>
                    {pagination?.totalPages > 1 && (
                        <div className="flex justify-center mt-8">
                            <CustomPagination
                                numberOfPage={pagination.totalPages}
                                totalProducts={pagination.totalElements}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Products;
