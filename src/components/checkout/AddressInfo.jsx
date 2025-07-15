import { Skeleton } from "@mui/material";
import { FaAddressBook } from "react-icons/fa";

const AddressInfo = () => {
    const noAddressExist = true;
    const isLoading = false;

    return (
        <div className="pt-4">
            <div className="p-6 rounded-lg max-w-md mx-auto text-center">
                {noAddressExist ? (
                    <>
                        <FaAddressBook size={50} className="text-gray-500 mb-4 mx-auto" />
                        <h1 className="mb-2 text-slate-800 font-semibold text-2xl">
                            No addresses added yet
                        </h1>
                        <p className="text-slate-600 text-base">
                            Please add your address to proceed with the purchase.
                        </p>
                    </>
                ) : (
                    <>
                        <h1 className="text-slate-800 text-center font-bold text-2xl mb-4">
                            Select Address
                        </h1>
                        {isLoading ? (
                            <div className="py-4 px-8">
                                <Skeleton height={60} />
                            </div>
                        ) : (
                            <div className="space-y-4 pt-6">
                                <p>Address list will be displayed here...</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default AddressInfo;
