const About = () => {
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