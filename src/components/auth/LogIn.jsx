import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {AiOutlineLogin} from "react-icons/ai";
import InputField from "../shared/InputField.jsx";
import {useDispatch} from "react-redux";
import {authenticateSignInUser} from "../../store/action/index.js";
import toast from "react-hot-toast";
import Spinners from "../shared/Spinners.jsx";

const LogIn = () =>  {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm({
        mode: "onTouched",
    });

    const loginHandle = async (data) => {
        console.log("Login Click");
        dispatch(authenticateSignInUser(data, toast, reset, navigate, setLoader,));
    }

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
            <form onSubmit={handleSubmit(loginHandle)}
                  className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md">


                <p className="text-center text-sm text-slate-700 mt-6">
                    Don't have an account?
                    <Link className="font-semibold underline hover:text-black"
                          to="/register"
                    >
                        <span>
                            SignUp
                        </span>
                    </Link>
                </p>
            </form>
        </div>
    );

}

export default LogIn;