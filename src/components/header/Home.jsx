import {useNavigate} from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/dashboard");
    }
    return(
        <div className="flex flex-col items-center jystify-center min-h-screen bg-gray">
            <h2
                className='text-3xl font-bold text-blue-600'>
                    Home Page</h2>
            <p
            className='text-grey-700 mt-4 text-lg'>
                Welcome to the Home Page! Explore this site to learn more.</p>
            <button
                className='text-grey-700 mt-4 text-lg bg-gray-500'
                onClick={handleLogin}
            >Login</button>
        </div>
    );
}

export default Home;