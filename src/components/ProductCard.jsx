import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import ProductViewModal from "./ProductViewModal.jsx";

const ProductCard = ({
                         productId,
                         productName,
                         image,
                         description,
                         quantity,
                         price,
                         discount,
                         specialPrice,
                     }) => {
    const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const [selectedViewProduct, setSelectedViewProduct] = useState(null);
    const btnLoader = false;

    const isAvailable = quantity && Number(quantity) > 0;

    const handleProductView = (product) => {
        setSelectedViewProduct(product);
        setOpenProductViewModal(true);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        handleProductView({
            id: productId,
            productName,
            image,
            description,
            quantity,
            price,
            discount,
            specialPrice,
        });
    };

    return (
        <div className="h-full flex flex-col border rounded-2xl shadow-md overflow-hidden transition hover:shadow-2xl duration-300 bg-white">
            <div
                onClick={() =>
                    handleProductView({
                        id: productId,
                        productName,
                        image,
                        description,
                        quantity,
                        price,
                        discount,
                        specialPrice,
                    })
                }
                className="w-full overflow-hidden aspect-[3/2] cursor-pointer"
            >
                <img
                    src={image}
                    alt={productName}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>

            <div className="p-4 flex flex-col justify-between flex-grow">
                <h2
                    onClick={() =>
                        handleProductView({
                            id: productId,
                            productName,
                            image,
                            description,
                            quantity,
                            price,
                            discount,
                            specialPrice,
                        })
                    }
                    className="text-lg font-bold text-slate-800 mb-2 hover:text-blue-600 cursor-pointer transition"
                >
                    {productName}
                </h2>

                <div className="text-gray-600 text-sm mb-4 min-h-[60px] line-clamp-3">
                    {description}
                </div>

                <div className="flex items-center justify-between mt-auto">
                    {specialPrice ? (
                        <div className="flex flex-col">
              <span className="text-gray-400 text-sm line-through">
                ${Number(price).toFixed(2)}
              </span>
                            <span className="text-xl font-bold text-slate-800">
                ${Number(specialPrice).toFixed(2)}
              </span>
                        </div>
                    ) : (
                        <span className="text-xl font-bold text-slate-800">
              ${Number(price).toFixed(2)}
            </span>
                    )}
                    <button
                        disabled={!isAvailable || btnLoader}
                        onClick={handleAddToCart}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-white transition ${
                            isAvailable
                                ? "bg-blue-600 hover:bg-blue-700"
                                : "bg-gray-400 cursor-not-allowed"
                        }`}
                    >
                        <FaShoppingCart />
                        {isAvailable ? "Add to Cart" : "Out of Stock"}
                    </button>
                </div>
            </div>

            {selectedViewProduct && (
                <ProductViewModal
                    open={openProductViewModal}
                    setOpen={setOpenProductViewModal}
                    product={selectedViewProduct}
                    isAvailable={isAvailable}
                />
            )}
        </div>
    );
};

export default ProductCard;
