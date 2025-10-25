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


        </div>
    )
}

export default About;