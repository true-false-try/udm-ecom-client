import {useNavigate} from "react-router-dom";

function Dashboard(){
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    }
    return(
        <div>
            <h1>
                WELCOME!
            </h1>
            <button
            className='text-grey-700 mt-4 text-lg bg-gray-500'
            onClick={handleLogout}
            >Logout</button>
        </div>
    );
}
export default Dashboard;