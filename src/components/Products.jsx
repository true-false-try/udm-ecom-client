
import ProductCard from "./ProductCard.jsx";
import { FaExclamationTriangle } from 'react-icons/fa';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Filter from "./Filter.jsx";
import UseProductFilter from "./UseProductFilter.jsx";
import {fetchCategories} from "../store/action/index.js";
import Loader from "./Loader.jsx";


const Products = () => {
    const{ isLoading, errorMessage } = useSelector(
        (state) => state.errors
    );

    const { products, categories } = useSelector((state) => state.product || {});

    const dispatch = useDispatch();
    UseProductFilter();

    useEffect(() => {
            dispatch(fetchCategories())
        },[dispatch]);

    return(
      <div className="lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto">
          <Filter categories={categories ? categories : []}/>
          {isLoading ? (
             <Loader text={"Products Loading..."}/>
          ) : errorMessage ? (
              <div className="flex justify-center items-center h-[200px]">
                  <FaExclamationTriangle  className="text-state-800 text-3xl mr-2"/>
                  <span className="text-state-800 text-lg font-medium">
                      {errorMessage}
                  </span>
              </div>
          ) : (
              <div className="min-h-[700px]">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-6 gap-x-6">
                    {
                        products &&
                        products.map((item,i) => <ProductCard key={i} {...item} />)
                    }
                </div>
              </div>
          )
          }
      </div>
    );
}
export default Products;
