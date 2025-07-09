import { MdArrowBack, MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ItemContent from "./ItemContent.jsx";
import CartEmpty from "./CartEmpty.jsx";
import { formatPrice } from "../../utils/formatPrice.js";

const Cart = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.carts);

    const totalPrice = cart?.reduce((acc, cur) => {
        const price = Number(cur?.specialPrice || 0);
        const qty = Number(cur?.quantity || 0);
        return acc + price * qty;
    }, 0);

    if (!cart || cart.length === 0) return <CartEmpty />;

    return (
        <div className="lg:px-14 sm:px-8 px-4 py-10">
            <div className="flex flex-col items-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 flex items-center gap-3">
                    <MdShoppingCart size={36} className="text-gray-700" />
                    Your Cart
                </h1>
                <p className="text-lg text-gray-600 mt-2">All your selected items</p>
            </div>

            <div className="grid grid-cols-12 gap-4 pb-2 font-semibold items-center border-b border-slate-300">
                <div className="col-span-5 text-lg text-slate-800">Product</div>
                <div className="col-span-2 text-lg text-slate-800">Qty</div>
                <div className="col-span-2 text-lg text-slate-800">Price</div>
                <div className="col-span-3 text-lg text-slate-800">Total</div>
            </div>

            {cart.map((item, i) => (
                <ItemContent key={i} {...item} />
            ))}

            <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 border-t pt-6">
                <p className="text-slate-500">
                    Taxes and shipping calculated at checkout
                </p>
                <div className="text-right w-full sm:w-auto">
                    <div className="text-lg font-semibold flex justify-between sm:justify-end gap-4">
                        <span>Subtotal:</span>
                        <span>{formatPrice(totalPrice)}</span>
                    </div>
                    <Link to="/checkout">
                        <button
                            className="mt-4 w-full sm:w-[300px] py-2 px-4 rounded-sm bg-gray-900 text-white flex items-center justify-center gap-2 hover:bg-gray-800 transition"
                        >
                            <MdShoppingCart size={20} />
                            Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
