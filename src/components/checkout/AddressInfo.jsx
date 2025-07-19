import { Skeleton } from "@mui/material";
import { FaAddressBook } from "react-icons/fa";

const AddressInfo = () => {
    const noAddressExist = true;
    const isLoading = false;

    return (
        <div className="pt-4 px-4">
            <div className="max-w-md mx-auto p-6 rounded-lg shadow-sm bg-white text-center">
                {noAddressExist ? (
                    <>
                        <FaAddressBook size={50} className="text-gray-500 mb-4 mx-auto" />
                        <h1 className="text-slate-800 font-semibold text-2xl mb-2">
                            No addresses added yet
                        </h1>
                        <p className="text-slate-600 text-base">
                            Please add your address to complete your purchase.
                        </p>
                    </>
                ) : (
                    <>
                        <h1 className="text-slate-800 text-center font-bold text-2xl mb-4">
                            Select Address
                        </h1>
                        {isLoading ? (
                            <div className="py-4 px-8">
                                <Skeleton variant="rectangular" width="100%" height={60} />
                            </div>
                        ) : (
                            <div className="space-y-4 pt-4">
                                <p className="text-slate-600">Address list will appear here...</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default AddressInfo;
