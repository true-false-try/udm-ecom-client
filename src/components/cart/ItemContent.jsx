import {useState} from "react";
import SetQuantity from "./SetQuantity.jsx";
import {useDispatch} from "react-redux";
import {increaseCartQuantity} from "../../store/action/index.js";
import toast from "react-hot-toast";

function HitOtlineTrash(props: { size: number, className: string }) {
    return null;
}

const ItemContent = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
    cartId
                     }) =>  {

    const [currentQuantity, setCurrentQuantity] = useState(quantity);
    const dispatch = useDispatch();

    const  handleQuantityIncrease = (cartItems) => {
      dispatch(increaseCartQuantity(
          cartItems,
          toast,
          currentQuantity,
          setCurrentQuantity
      ));
    };
    return (
        <div className="grid md:grid-cols-5grid-cols-4 md:text-md text-sm gap-4 items-center border-[1px] border-slate-200">
            <div className="md:col-span-2 justify-self-start flex flex-col gap-2">
                <div className="flex md:flesx-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start">
                    <h3 className="lg:text-[17px] text-sm font-semibold text-slate-600">
                        {productName}
                    </h3>
                </div>
                <div className="md:w-36 sm:w-24">
                    <img src={image}
                         alt={productName}
                         className="md:h-36 sm:h-24 h-12 w-full object-cover rounded-md"/>
                </div>
                <div className="flex items-start gap-5 mt-3">
                    <button
                        onClick={() => {}}
                        className="flex items-center font-semibold space-x-2 px-2 text-xs border-rose-600 text-rose-600 round-md hover:bg-red-50 transition-colors duration-200">
                        <HitOtlineTrash  size={16} className="text-rose-600"/>
                        Remove
                    </button>
                </div>
            </div>

            <div className="justify-self-center lg:text-[17px] text-sm slate-slate-600 font-semibold">
                {Number(specialPrice)}
            </div>

            <div className="justify-self-center">
               <SetQuantity quantity={currentQuantity}
                            cardCounter={true}
                            handeQtyIncrease={() => handleQuantityIncrease(
                                image,
                                productName,
                                description,
                                specialPrice,
                                price,
                                quantity
                            )}
                            handleQtyDecrease={() => {}}/>
            </div>

            <div className="justify-self-center lg:text-[17px] text-sm slate-slate-600 font-semibold">
                {Number(currentQuantity) * Number(specialPrice)}
            </div>

        </div>
    );
}
export default ItemContent;
