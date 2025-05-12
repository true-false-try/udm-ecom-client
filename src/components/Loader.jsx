import {RotateLoader} from "react-spinners";

const Loader = (text) => {
    return (
        <div className="flex justify-center items-center w-full h-[450px]">
            <div className="flex flex-col items-center gap-1">
                <RotateLoader />
                <p className="text-slate-100"> {text ? text :"Please wait..."}</p>
            </div>
        </div>
    )
}

export default Loader;