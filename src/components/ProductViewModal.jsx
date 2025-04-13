import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

function ProductViewModal({open, setOpen, product, isAvailable}) {
    const {id, productName, image, description, quantity, price, discount, specialPrice} = product
    const handleClickOpen = () => {
        setOpen(true);
    }
    return (
        <>
            <Dialog open={open} onClose={() => setOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                        <DialogTitle className="font-bold">{productName}</DialogTitle>
                        <DialogTitle className="font-bold">{description}</DialogTitle>
                        <Description>This will permanently deactivate your account</Description>
                        <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
                        <div className="flex gap-4">
                            <button onClick={() => setOpen(false)}>Cancel</button>
                            <button onClick={() => setOpen(false)}>Deactivate</button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default ProductViewModal;