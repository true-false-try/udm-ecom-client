import {RotateLoader} from "react-spinners";

const Loader = ({text}) => {
    return (
        <div className="flex justify-center items-center w-full h-[450px]">
            <div className="flex flex-col items-center gap-4">
                <RotateLoader color="#1976d2" />
                <p className="text-slate-600">{text || "Please wait..."}</p>
            </div>
        </div>
    );
}

export default Loader;
