import {Link, useLocation} from "react-router-dom";
import {FaShoppingCart, FaStore} from "react-icons/fa";
import {Badge} from "@mui/material";

const Navbar = () => {
    const path =  useLocation().pathname
    return (
        <div className="h-[70px] bg-custom-gradient text-white z-50 flex items-center top-0">
            <div className="lg:px-14 sm:px-8 px-4 w-full flex items-center justify-between">
                <Link to="/" className="flex items-center text-2xl font-bold">
                    <FaStore className="mr2 text-3xl" />
                    <span className="font-[Poppins]">E-Shop</span>
                </Link>

                <ul className="flex text-slate-800 absolute left-0 gap-4">
                    <li className="font-[500] transition-all duration-150">
                        <Link className={`${
                            path === "/" ? "text-white font-semibold" : "text-grey-200"
                        }`}
                        to={"/"}>
                            Home
                        </Link>
                    </li>

                    <li className="font-[500] transition-all duration-150">
                        <Link className={`${
                            path === "/products" ? "text-white font-semibold" : "text-grey-200"
                        }`}
                              to={"/products"}>
                            Products
                        </Link>
                    </li>

                    <li className="font-[500] transition-all duration-150">
                        <Link className={`${
                            path === "/about" ? "text-white font-semibold" : "text-grey-200"
                        }`}
                              to={"/about"}>
                            About
                        </Link>
                    </li>

                    <li className="font-[500] transition-all duration-150">
                        <Link className={`${
                            path === "/contact" ? "text-white font-semibold" : "text-grey-200"
                        }`}
                              to={"/contact"}>
                            Contact
                        </Link>
                    </li>

                    <li className="font-[500] transition-all duration-150">
                        <Link className={`${
                            path === "/cart" ? "text-white font-semibold" : "text-grey-200"
                        }`}
                              to={"/cart"}>
                            <Badge
                            showZero={true}
                            badgeContent={0}
                            color="primary"
                            overlap="circular"
                            anchorOrigin={{ vertical: "top", horizontal: "right" }}>
                                <FaShoppingCart size={25}/>
                            </Badge>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;