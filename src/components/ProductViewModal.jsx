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

        </>
    )
}

export default ProductViewModal;