import {useState} from "react";
import {FaShoppingCart} from "react-icons/fa";
import ProductViewModal from "./ProductViewModal.jsx";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/action/index.js";
import toast from "react-hot-toast";
import truncateText from "../../utils/truncateText.js";

const ProductCard = ({
                         productId,
                         productName,
                         image,
                         description,
                         quantity,
                         price,
                         discount,
                         specialPrice,
                         about,
                     }) => {
    const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const [selectedViewProduct, setSelectedViewProduct] = useState(null);
    const isAvailable = quantity && Number(quantity) > 0;
    const dispatch = useDispatch();

    const productData = {
        id: productId,
        productName,
        image,
        description,
        quantity,
        price,
        discount,
        specialPrice,
    };

    const handleProductView = () => {
        if (!about) {
            setSelectedViewProduct(productData);
            setOpenProductViewModal(true);
        }
    };

    const addToCartHandler = () => {
        dispatch(addToCart(productData, 1, toast));
    };

    return (
        <div className="h-full flex flex-col border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
            <div
                onClick={handleProductView}
                className="w-full overflow-hidden aspect-[3/2] cursor-pointer"
            >
                <img
                    className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                    src={image}
                    alt={productName}
                />
            </div>

            <div className="p-4 flex-grow flex flex-col">
                <h2
                    onClick={handleProductView}
                    className="text-lg font-semibold mb-2 cursor-pointer hover:text-blue-600 transition"
                >
                    {productName}
                </h2>
                <div className="min-h-[60px] mb-3">
                    <p className="text-gray-600 text-sm">{truncateText(description, 80)}</p>
                </div>

                {!about && (
                    <div className="flex items-center justify-between mt-auto">
                        {specialPrice ? (
                            <div className="flex flex-col">
                                <span className="text-gray-400 line-through text-sm">
                                    ${Number(price).toFixed(2)}
                                </span>
                                <span className="text-xl font-bold text-slate-700">
                                    ${Number(specialPrice).toFixed(2)}
                                </span>
                            </div>
                        ) : (
                            <span className="text-xl font-bold text-slate-700">
                                ${Number(price).toFixed(2)}
                            </span>
                        )}
                        <button
                            disabled={!isAvailable}
                            onClick={addToCartHandler}
                            className={`bg-blue-500 text-white px-4 py-2 rounded flex items-center transition ${
                                isAvailable ? "opacity-100 hover:bg-blue-600" : "opacity-50 cursor-not-allowed"
                            }`}
                        >
                            <FaShoppingCart className="mr-2"/>
                            {isAvailable ? "Add to Cart" : "Out of Stock"}
                        </button>
                    </div>
                )}
            </div>

            <ProductViewModal
                open={openProductViewModal}
                setOpen={setOpenProductViewModal}
                product={selectedViewProduct}
                isAvailable={isAvailable}
            />
        </div>
    );
}

export default ProductCard;
