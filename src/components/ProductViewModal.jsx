import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

function ProductViewModal({open, setOpen, product, isAvailable}) {
    let [isOpen, setIsOpen] = useState(false)
    const {id, productName, image, description, quantity, price, discount, specialPrice} = product
    function open() {
        setOpen(true)
    }
    function close() {
        setOpen(false)
    }

    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open dialog</button>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
                        <DialogTitle className="font-bold">{description}</DialogTitle>
                        <Description>This will permanently deactivate your account</Description>
                        <p>Are you sure you want to deactivate your account? All of your data will be permanently removed.</p>
                        <div className="flex gap-4">
                            <button onClick={() => setIsOpen(false)}>Cancel</button>
                            <button onClick={() => setIsOpen(false)}>Deactivate</button>
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    )
}

export default ProductViewModal;