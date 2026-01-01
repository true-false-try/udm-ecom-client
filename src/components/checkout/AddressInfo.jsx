import { Skeleton } from "@mui/material";
import { FaAddressBook } from "react-icons/fa";

const AddressInfo = () => {
    const noAddressExist = true;
    const isLoading = false;

    return (
        <div className="pt-4">
            {isLoading ? (
                <div className="max-w-md mx-auto p-6">
                    <Skeleton variant="text" height={40} />
                    <Skeleton variant="text" height={30} />
                </div>
            ) : noAddressExist ? (

            ) : (
                <div className="relative p-6 rounded-lg max-w-md mx-auto bg-white shadow">
                    <h1 className="text-slate-800 text-center font-bold text-2xl">
                        Select an address
                    </h1>
                </div>
            )}
        </div>
    );
};

export default AddressInfo;
