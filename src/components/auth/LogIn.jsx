import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {AiOutlineLogin} from "react-icons/ai";
import InputField from "../shared/InputField.jsx";
import {useDispatch} from "react-redux";
import {authenticateSignInUser} from "../../store/action/index.js";
import toast from "react-hot-toast";
import Spinners from "../shared/Spinners.jsx";

const LogIn = () => {
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

    const loginHandle = (data) => {
        dispatch(authenticateSignInUser(data, toast, reset, navigate, setLoader));
    };

    return (
        <div className="min-h-[calc(100vh-70px)] flex justify-center items-center">
            <form
                onSubmit={handleSubmit(loginHandle)}
                className="sm:w-[450px] w-[360px] shadow-lg py-8 sm:px-8 px-4 rounded-md border border-gray-200"
            >
                <div className="flex flex-col items-center justify-center space-y-4 mb-6">
                    <AiOutlineLogin className="text-slate-800 text-5xl"/>
                    <h1 className="text-slate-800 text-center lg:text-3xl text-2xl font-bold">
                        Login Here
                    </h1>
                    <hr className="w-full text-black"/>
                </div>

                <div className="flex flex-col gap-4">
                    <InputField
                        label="Username"
                        required
                        id="username"
                        type="text"
                        message="*Username is required"
                        placeholder="Enter your username"
                        register={register}
                        errors={errors}
                    />
                    <InputField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="*Password is required"
                        placeholder="Enter your password"
                        register={register}
                        errors={errors}
                        min={6}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loader}
                    className="mt-6 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition disabled:opacity-60 flex items-center justify-center gap-2"
                >
                    {loader ? <Spinners /> : "Login"}
                </button>

                <p className="text-center text-sm text-slate-700 mt-4">
                    Don't have an account?{" "}
                    <Link className="font-semibold underline hover:text-black" to="/register">
                        Sign Up
                    </Link>
                </p>
            </form>
        </div>
    );
}

export default LogIn;
