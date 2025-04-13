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
                     }) => {
    const [openProductViewModal, setOpenProductViewModal] = useState(false);
    const btnLoader = false;
    const [selectedViewProduct, setSelectedViewProduct] = useState("");
    const isAvailable =  quantity && Number(quantity) > 0;

    const handleProductView = (product) => {
        setSelectedViewProduct(product);
        setOpenProductViewModal(true);
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
                        })
                    }}
                    className="text-lg font-semibold mb-2 cursor-pointer"
                >
                    {productName}
                </h2>
                <div className="min-h-[80px] max-h-[80px] overflow-hidden">
                    <p className="text-gray-600 text-sm">{description}</p>
                </div>
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
                            })
                        }}
                        className={`bg-blue-500 ${isAvailable} ? "opacity-100 hover:blue-600" : "opacity-70`}>
                        <FaShoppingCart className="mr-2"/>
                        {isAvailable ? "Add to Cart" : "Stock Out"}
                    </button>
                </div>
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