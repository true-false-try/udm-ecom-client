import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {AiOutlineAim, AiOutlineLogin} from "react-icons/ai";

const LogIn = () =>  {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm({
        mode: "onTouched",
    });

    const loginHandle = async (data) => {
        console.log("Login Click")
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
                </div>
            </form>
        </div>
    )
}