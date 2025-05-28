import {FaEnvelope, FaMapMarkerAlt, FaPhone} from "react-icons/fa";

const Contact = () => {
    return (
        <div
        className="flex flex-col items-center justify-center min-h-screen py-12 bg-cover bg-center"
        // Can set any image at backgroundImage
        style={{backgroundImage: "url('')"}}>
            <div className="bg-white shadow-lg rounted-lg p-8 w-full max-w-lg">
                <h1 className="text-4xl font-bold text-center mb-6">
                    Contact Us
                </h1>
                <p className="text-gray-600 text-center mb4 ">
                    We would love to hear from you! Please fill out the form below or contact us directly.
                </p>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            name
                        </label>
                        <input
                            type="text"
                            required={true}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            email
                        </label>
                        <input
                            type="text"
                            required={true}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            message
                        </label>
                        <textarea
                            rows="4"
                            required={true}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700"
                        />
                    </div>

                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                        Send Message!
                    </button>
                </form>

                <div className="mt-8 text-center">
                    <h2 className="text-lg font-semibold">Contact Information</h2>
                    <div className="flex flex-col item">
                        <div className="flex item-center"></div>
                        <FaPhone className="text-blue-500 mr-2"/>
                        <span>+38073*******</span>
                    </div>

                    <div className="flex flex-col item">
                        <div className="flex item-center"></div>
                        <FaEnvelope className="text-blue-500 mr-2"/>
                        <span className="text-gray-500">infotest@gmail.com</span>
                    </div>

                    <div className="flex flex-col item">
                        <div className="flex item-center"></div>
                        <FaMapMarkerAlt className="text-blue-500 mr-2"/>
                        <span className="text-gray-500">123 Main, Towm, USA</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;
