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


            <div className="grid md:grid-cols-5 grid-cols-4 gap-4 pb-2 font-semibold items-center">
                <div className="md:col-span-2 justify-self-start text-lg text-slate-800 lg-ps-4">
                    Product
                </div>
                <div className="md:col-span-2 justify-self-start text-lg text-slate-800 lg-ps-4">
                    Quantity
                </div>
                <div className="md:col-span-2 justify-self-start text-lg text-slate-800 lg-ps-4">
                    Price
                </div>
                <div className="md:col-span-2 justify-self-start text-lg text-slate-800 lg-ps-4">
                    Total
                </div>

                <div>
                    {cart && cart.length > 0 &&
                        cart.map((item, i) => <ItemContent key={i} {...item}/>)}
                </div>

                <div className="border-t-[1.5px] border-slate-200 py-4 sm:flex sm:flex-row sm:px-0 px-2 flex-col sm:justify-between">
                    <div></div>
                    <div className="flex text-sm gap-l flex-col">
                        <div className="flex justify-between w-full md:text-lg text-sm font-semibold">
                            <span>Subtotal</span>
                            <span>{formatPrice(newCart?.totalPrice)}</span>
                        </div>
                    </div>
                    <p className="text-slate-500">
                        Taxes and shipping calculated at checkout
                    </p>
                    <Link className="w-full flex justify-end" to="/checkout">
                        <button
                            onClick={() => {}}
                            className="font-semibold w-[300px] py-2 px-4 rounded-sm text-white flex items-center justify-center gap-2 hover:text-gray-300 transition duration-500">
                            <MdShoppingCart size={20} />
                            Checkout
                        </button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
};

export default Cart;