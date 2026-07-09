import {useState} from "react";
import SetQuantity from "./SetQuantity.jsx";
import {useDispatch} from "react-redux";
import {decreaseCartQuantity, increaseCartQuantity, removeFromCart} from "../../store/action/index.js";
import toast from "react-hot-toast";
import {formatPrice} from "../../utils/formatPrice.js";
import truncateText from "../../utils/truncateText.js";
import {MdDelete} from "react-icons/md";

const ItemContent = ({
                         id,
                         productId,
                         productName,
                         image,
                         description,
                         quantity,
                         price,
                         discount,
                         specialPrice,
                     }) => {

    const [currentQuantity, setCurrentQuantity] = useState(quantity || 1);
    const dispatch = useDispatch();

    const itemData = {
        id: id || productId,
        productName,
        image,
        description,
        specialPrice,
        price,
        quantity: currentQuantity,
    };

    const handleQuantityIncrease = () => {
        dispatch(increaseCartQuantity(itemData, toast, currentQuantity, setCurrentQuantity));
    };

    const handleQuantityDecrease = () => {
        if (currentQuantity > 1) {
            const newQuantity = currentQuantity - 1;
            setCurrentQuantity(newQuantity);
            dispatch(decreaseCartQuantity(itemData, newQuantity));
        }
    };

    const removeItemFromCart = () => {
        dispatch(removeFromCart(itemData, toast));
    };

    const displayPrice = specialPrice || price;

    return (
        <div className="grid md:grid-cols-5 grid-cols-1 md:text-md text-sm gap-4 items-center border border-slate-200 rounded-lg p-4">
            <div className="md:col-span-2 flex flex-row gap-4 items-center">
                <div className="md:w-24 w-20 flex-shrink-0">
                    <img
                        src={image}
                        alt={productName}
                        className="md:h-24 h-20 w-full object-cover rounded-md"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <h3 className="lg:text-[15px] text-sm font-semibold text-slate-700">
                        {truncateText(productName, 50)}
                    </h3>
                    <button
                        onClick={removeItemFromCart}
                        className="flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-800 transition w-fit"
                    >
                        <MdDelete size={16} />
                        Remove
                    </button>
                </div>
            </div>

            <div className="justify-self-start md:justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
                {formatPrice(Number(displayPrice))}
            </div>

            <div className="justify-self-start md:justify-self-center">
                <SetQuantity
                    quantity={currentQuantity}
                    cardCounter={true}
                    handeQtyIncrease={handleQuantityIncrease}
                    handleQtyDecrease={handleQuantityDecrease}
                />
            </div>

            <div className="justify-self-start md:justify-self-center lg:text-[17px] text-sm text-slate-600 font-semibold">
                {formatPrice(Number(currentQuantity) * Number(displayPrice))}
            </div>
        </div>
    );
}

export default ItemContent;
