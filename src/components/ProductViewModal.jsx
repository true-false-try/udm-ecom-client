import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { MdClose, MdDone } from 'react-icons/md';
import { Divider } from '@mui/material';
import Status from './Status.jsx';

function ProductViewModal({ open, setOpen, product, isAvailable }) {
    if (!product) return null;

    const {
        productName,
        image,
        description,
        price,
        specialPrice,
    } = product;

    return (
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black/30 backdrop-blur-sm">
                <DialogPanel
                    className="relative transform overflow-hidden rounded-2xl bg-white shadow-xl transition-all md:w-[620px] w-full max-w-2xl"
                >
                    {/* Изображение */}
                    {image && (
                        <div className="flex justify-center aspect-[3/2] overflow-hidden">
                            <img
                                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                src={image}
                                alt={productName}
                            />
                        </div>
                    )}

                    {/* Контент */}
                    <div className="px-6 pt-8 pb-4">
                        <div className="flex justify-between items-center">
                            <DialogTitle className="text-xl font-bold text-slate-800">
                                {productName}
                            </DialogTitle>
                            <button
                                onClick={() => setOpen(false)}
                                className="text-gray-500 hover:text-red-600 transition"
                                aria-label="Close"
                            >
                                <MdClose size={24} />
                            </button>
                        </div>

                        {/* Статус */}
                        <div className="my-2">
                            {isAvailable ? (
                                <Status
                                    text="In Stock"
                                    icon={MdDone}
                                    bg="bg-teal-200"
                                    color="text-teal-900"
                                />
                            ) : (
                                <Status
                                    text="Out of Stock"
                                    icon={MdClose}
                                    bg="bg-red-200"
                                    color="text-red-800"
                                />
                            )}
                        </div>

                        <Divider className="my-4" />

                        {/* Описание */}
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>

                        {/* Цена */}
                        <div className="mb-4">
                            {specialPrice ? (
                                <div className="text-xl font-bold text-slate-900">
                  <span className="line-through text-gray-400 mr-2">
                    ${Number(price).toFixed(2)}
                  </span>
                                    <span>${Number(specialPrice).toFixed(2)}</span>
                                </div>
                            ) : (
                                <div className="text-xl font-bold text-slate-900">
                                    ${Number(price).toFixed(2)}
                                </div>
                            )}
                        </div>

                        {/* Кнопка закрытия */}
                        <div className="flex justify-end">
                            <button
                                onClick={() => setOpen(false)}
                                className="px-4 py-2 text-sm font-semibold bg-gray-100 text-slate-700 rounded-lg border border-gray-300 hover:bg-gray-200 transition"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}

export default ProductViewModal;
