import {Skeleton} from "@mui/material";
import {FaAddressBook} from "react-icons/fa";

const AddressInfo = () => {
    const noAddressExist = true;
    const isLoading = false;

    return (
        <div className='pt-4'>
            {noAddressExist ? (
                <div className='p-6 rounded-lg max-w-md mx-auto flex-col items-center justify-center'>
                    <h1 className='mb-2 text-slate-800 text-center font-semibold text-2xl'>
                        No addresses added yet
                    </h1>
                    <p className='mb-2 text-slate-800 text-center font-semibold text-2xl'>
                        Please added your address to complete purchase
                    </p>
                </div>
            ) : (
                <div className='relative p-6 rounded-lg max-w-md mx-auto'>
                    <h1 className='text-slate-800 taxt-center font-bold text-2xl'>
                        Select address
                    </h1>

                </div>
            )}
        </div>
    );
}

export default AddressInfo;