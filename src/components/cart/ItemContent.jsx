import {useState} from "react";

const ItemContent = ({
    productId,
    productName,
    image,
    description,
    quantity,
    price,
    discount,
    specialPrice,
    cartId
                     }) =>  {

    const [currentQuantity, setCurrentQuantity] = useState(quantity);

    return (
        <div className="grid md:grid-cols-5grid-cols-4 md:text-md text-sm gap-4 items-center border-[1px] border-slate-200">
            <div className="md:col-span-2 justify-self-start flex flex-col gap-2">
                <div className="flex md:flesx-row flex-col lg:gap-4 sm:gap-3 gap-0 items-start">
                    <h3 className="lg:text-[17px] text-sm font-semibold text-slate-600">
                        {productName}
                    </h3>
                </div>
                <div className="md:w-36 sm:w-24">
                    <img src={image}
                         alt={productName}
                         className="md:h-36 sm:h-24 h-12 w-full object-cover rounded-md"/>
                </div>
            </div>
        </div>
    );
}
export default ItemContent;
