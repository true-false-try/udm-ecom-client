import {useState} from "react";
import {FaShoppingCart} from "react-icons/fa";
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
                         about,
                     }) => {
    const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const btnLoader = false;
    const [selectedViewProduct, setSelectedViewProduct] = useState("");
    const isAvailable =  quantity && Number(quantity) > 0;

    const handleProductView = (product) => {
        if (!about) {
            setSelectedViewProduct(product);
            setOpenProductViewModal(true);
        }
    }
    return (
        <div className="h-full flex flex-col border rounded-lg shadow-xl overflow-hidden transition-shadow duration-300">
            <div
                onClick={() => {
                    handleProductView({
                        id: productId,
                        productName,
                        image,
                        description,
                        quantity,
                        price,
                        discount,
                        specialPrice,
                        about,
                    })
                }}
                className="w-full overflow-hidden aspect-[3/2]"
            >
                <img
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-105"
                    src={image}
                    alt={productName}
                />
            </div>
            <div className="p-4 flex-grow">
                <h2
                    onClick={() => {
                        handleProductView({
                            id: productId,
                            productName,
                            image,
                            description,
                            quantity,
                            price,
                            discount,
                            specialPrice,
                            about,
                        })
                    }}
                    className="text-lg font-semibold mb-2 cursor-pointer"
                >
                    {productName}
                </h2>
                <div className="min-h-[80px] max-h-[80px] overflow-hidden">
                    <p className="text-gray-600 text-sm">{truncateText(description, 80)}</p>
                </div>
                {!about && (
                    <div className="flex items-center justify-between">
                        {specialPrice ? (
                            <div className="flex flex-col">
                        <span className="text-grey-400 line-through">
                            ${Number(price).toFixed(2)}
                        </span>
                                <span className="text-xl font-bold text-slate-700 ">
                            ${Number(specialPrice).toFixed(2)}
                        </span>
                            </div>
                        ) : (
                            <span className="text-xl font-bold text-slate-700 ">
                            {" "}
                                ${Number(price).toFixed(2)}
                        </span>
                        )
                        }
                        <button
                            disabled={!isAvailable || btnLoader}
                            onClick={() => {
                                handleProductView({
                                    id: productId,
                                    productName,
                                    image,
                                    description,
                                    quantity,
                                    price,
                                    discount,
                                    specialPrice,
                                    about
                                })
                            }}
                            className={`bg-blue-500 text-white px-4 py-2 rounded flex items-center transition ${
                                isAvailable ? "opacity-100 hover:bg-blue-600" : "opacity-70 cursor-not-allowed"
                            }`}
                        >
                            <FaShoppingCart className="mr-2"/>
                            {isAvailable ? "Add to Cart" : "Stock Out"}
                        </button>
                    </div>
                )};
                    </div>
                        <ProductViewModal
                            open={openProductViewModal}
                            setOpen={setOpenProductViewModal}
                            product={selectedViewProduct}
                            isAvailable={isAvailable} />
                    </div>
                );
                }

export default ProductCard;