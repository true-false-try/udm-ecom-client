import {MdShoppingCart} from "react-icons/md";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import ItemContent from "./ItemContent.jsx";
import CartEmpty from "./CartEmpty.jsx";
import {formatPrice} from "../../utils/formatPrice.js";

const Cart = () => {
    const {cart} = useSelector((state) => state.cart);

    const totalPrice = cart?.reduce(
        (acc, cur) => acc + Number(cur?.specialPrice || cur?.price) * Number(cur?.quantity), 0
    ) || 0;

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

            <div className="grid grid-cols-5 gap-4 pb-2 font-semibold border-b border-slate-200 hidden md:grid">
                <div className="col-span-2 text-lg text-slate-800">Product</div>
                <div className="text-lg text-slate-800">Price</div>
                <div className="text-lg text-slate-800">Quantity</div>
                <div className="text-lg text-slate-800">Total</div>
            </div>

            <div className="flex flex-col gap-4 mt-4">
                {cart.map((item, i) => <ItemContent key={i} {...item} />)}
            </div>

            <div className="border-t-[1.5px] border-slate-200 py-6 mt-4 flex flex-col sm:flex-row sm:justify-between items-start gap-4">
                <p className="text-slate-500 text-sm">
                    Taxes and shipping calculated at checkout
                </p>
                <div className="flex flex-col items-end gap-4">
                    <div className="flex justify-between w-full md:text-lg text-sm font-semibold gap-8">
                        <span>Subtotal</span>
                        <span>{formatPrice(totalPrice)}</span>
                    </div>
                    <Link to="/checkout">
                        <button className="font-semibold w-[240px] py-2 px-4 rounded bg-blue-600 text-white flex items-center justify-center gap-2 hover:bg-blue-700 transition duration-300">
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
