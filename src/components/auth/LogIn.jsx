import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {AiOutlineAim, AiOutlineLogin} from "react-icons/ai";
import InputField from "../shared/InputField.jsx";
import {dispatch} from "react-hot-toast/src/core/store.js";
import {useDispatch} from "react-redux";
import {autheenticateSignInUser} from "../../store/action/index.js";
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
        dispatch(autheenticateSignInUser(data, toast, reset, navigate, setLoader,));
    }

    return (
        <div className="min-h-[calc(100vh-64px)] flex justify-center items-center">
            <form onSubmit={handleSubmit(loginHandle)}
                  className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <AiOutlineLogin  className="text-slate-800 text-5xl" />
                    <h1 className="text-slate-800 text-center font-montserrat lg:text-3xl text-2xl font-bold">
                        Login Here
                    </h1>
                    <hr className="mt-2 mb-5 text-black" />
                    <div className="flex flex-col gap-3">
                        <InputField
                            label="UserName"
                            required
                            id="username"
                            type="text"
                            message="*Username is required"
                            placeholder="Enter your username"
                            register={register}
                            errors={errors}
                        />
                    </div>
                    <div>
                        <InputField
                            label="Password"
                            required
                            id="password"
                            type="password"
                            message="*Password is required"
                            placeholder="Enter your password"
                            register={register}
                            errors={errors}
                        />
                    </div>

                    <button disabled={loader}
                            className="bg-button-gradient flex gap-2 items-center justify-center font-semibold text-white w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3"
                            type="submit">
                        {loader ? (
                            <>
                                <Spinners /> Loading...
                            </>
                        ) : (
                            <>Login</>
                            )}

                    </button>
                </div>

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