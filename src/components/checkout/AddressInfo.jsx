import { Skeleton } from "@mui/material";
import { FaAddressBook } from "react-icons/fa";

const AddressInfo = () => {
    const noAddressExist = true;
    const isLoading = false;

    return (
        <div className="pt-4">
            {isLoading ? (
                <div className="max-w-md mx-auto p-6">

                </div>
            ) : noAddressExist ? (
                <div className="p-6 rounded-lg max-w-md mx-auto flex flex-col items-center justify-center text-center bg-gray-100 shadow">
                    <FaAddressBook className="text-4xl text-blue-500 mb-4" />
                    <h1 className="mb-2 text-slate-800 font-semibold text-2xl">
                        No addresses added yet
                    </h1>
                    <p className="text-slate-700 text-base">
                        Please add your address to complete the purchase
                    </p>
                </div>
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
