import {Outlet, useSearchParams} from "react-router-dom";

function About(){
    const [searchParams, setSearchParams] = useSearchParams();
    const urlParams = new URLSearchParams(window.location.search);
    const topicFromUrl = urlParams.get("topic");
    const topic = searchParams.get("topic") || "general";
    const handleTopic = (newTopic) => {
        setSearchParams(newTopic);
    };
    console.log("useSearchParams: ", topic);
    console.log("useSearchParams: ", topicFromUrl);
    return(
        <div className="flex flex-col items-center jystify-center min-h-screen bg-gray">
            <h2
                className='text-3xl font-bold text-blue-600'>
                About Page</h2>
            <p
                className='text-grey-700 mt-4 text-lg'>
                Welcome to the About Page!</p>

            <div className='text-3xl font-bold text-blue-600'>
                <Outlet />
            </div>
            <div className='flex space-x-4 mt-4'>
                <button
                    onClick={() => handleTopic("Team")}
                    className='px-4 py-2 bg-blue-500 text white rounde-lg hover:bg-grey'>
                    Team
                </button>
                <button
                    onClick={() => handleTopic("Mission")}
                    className='px-4 py-2 bg-blue-500 text white rounde-lg hover:bg-grey'>
                    Mission
                </button>
                <button
                    onClick={() => handleTopic("Vision")}
                    className='px-4 py-2 bg-blue-500 text white rounde-lg hover:bg-grey'>
                    Vision
                </button>
            </div>
        </div>
    );
}

export default About;