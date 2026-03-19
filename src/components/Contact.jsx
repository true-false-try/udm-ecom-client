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


                <div className="mt-8 text-center">
                    <h2 className="text-lg font-semibold">Contact Information</h2>

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
