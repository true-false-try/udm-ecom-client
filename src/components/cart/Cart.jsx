import {MdArrowBack, MdShoppingCart} from "react-icons/md";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ItemContent from "./ItemContent.jsx";
import CartEmpty from "./CartEmpty.jsx";
import {formatPrice} from "../../utils/formatPrice.js";

const Cart = () => {
    const dispatch = useDispatch();
    const {cart} = useSelector((state) => state.carts)
    const newCart = {...cart};

    newCart.totalPrice = cart?.reduce(
        (acc, cur) => acc + Number(cur?.specialPrice) * Number(cur?.quantity), 0
    );

    if (!cart || cart.length === 0 ) return <CartEmpty />;

    return(
        <div className="lg:px-14 sm:px-8 px-4 py-10">
            <div className="flex flex-col items-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                    <MdShoppingCart size={36} className="text-gray-700" />
                    Your Cart
                </h1>
                <p className="text-lg text-gray-600 mt-2">All your selected items</p>
            </div>


        </div>
    )
};

export default Cart;