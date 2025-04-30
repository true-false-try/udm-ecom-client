import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import {Divider} from "@mui/material";
import Status from "./Status.jsx";
import {MdClose, MdDone} from "react-icons/md";

function ProductViewModal({open, setOpen, product, isAvailable}) {
    const {id, productName, image, description, quantity, price, discount, specialPrice} = product
    const handleClickOpen = () => {
        setOpen(true);
    }
    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all md:max-w[620px] md:min-w-[620px] w-full"
                    >
                        {image && (
                            <div className='flex justify-center aspect-[3/2]'>
                                <img
                                    className="w-full h-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-105"
                                    src={image}
                                    alt={productName}
                                />
                            </div>
                        )}
                        <div className='px-6 pt-10 pb-2'>
                            <DialogTitle className="font-bold">{productName}</DialogTitle>
                            {isAvailable ? (
                                <Status
                                    text="In Stock"
                                    icon={MdDone}
                                    bg="bg-teal-200"
                                    color="text-teal-900"
                                />
                            ) : (
                                <Status
                                    text="Out-Of-Stock"
                                    icon={MdClose}
                                    bg="bg-teal-200"
                                    color="text-teal-700"
                                />
                            )}
                            <Divider />
                            <p>{description}</p>
                            <button
                                onClick={() => setOpen(false)}
                                type="button"
                                className="px-4 py-2 text-sm font-semibold text-slate-700 border"
                            >
                                Close
                            </button>
                        </div>
                    </DialogPanel>

                </div>
            </Dialog>
        </>
    )
}

export default ProductViewModal;