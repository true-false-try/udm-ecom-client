import {MdShoppingCart} from "react-icons/md";
import {Link} from "react-router-dom";

const CartEmpty = () => {
    return(
        <div className="min-h-[800px] flex flex-col items-center justify-center">

            <div className="mt6">
                <Link to={"/"}
                      className="flex gap-2 items-center text-blue-500 hover:text-blue-600 transition">
                    <span className="font-medium">Start shopping</span>
                </Link>
            </div>
        </div>
    )
}

export default CartEmpty;