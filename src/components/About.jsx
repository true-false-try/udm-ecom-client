import ProductCard from "./shared/ProductCard.jsx";

const About = () => {
    const  products = [
        {
            image: "https://embarkx.com/sample/placeholder.png",
            productName: "iPhone 13 Pro Max",
            description:
                "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features for breathtaking photos.",
            specialPrice: 720,
            price: 780,
        },
        {
            image: "https://embarkx.com/sample/placeholder.png",
            productName: "Samsung Galaxy S21",
            description:
                "Experience the brilliance of the Samsung Galaxy S21 with its vibrant AMOLED display, powerful camera, and sleek design that fits perfectly in your hand.",
            specialPrice: 699,
            price: 799,
        },
        {
            image: "https://embarkx.com/sample/placeholder.png",
            productName: "Google Pixel 6",
            description:
                "The Google Pixel 6 boasts cutting-edge AI features, exceptional photo quality, and a stunning display, making it a perfect choice for Android enthusiasts.",
            price: 599,
            specialPrice: 400,
        }

    ]

    return (
        <div className="max-7xl  mx-auto px-4 py-8">
            <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                About Us
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="w-full lg:w-1/2 text-center md:text-left">
                    <p className="text-lg mb-4">Welcome to our e-commerce store!</p>
                </div>

                <div className="w-full lg:w-1/2 mb-6 md:mb-0">
                    <img src="https://embarkx.com/sample/placeholder.png"
                         alt="About Us" className="w-full h-auto rounted-lg shadow-lg transform transitional duration-300 hover:scale-105" />
                </div>


            </div>

        </div>
    )
}

export default About;