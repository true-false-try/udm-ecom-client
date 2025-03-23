import {useLocation} from "react-router-dom";

const CurrentLocation = () => {
    const location = useLocation();
    return(
        <h1>Current Path: {location.pathname}</h1>

    );
}

export default CurrentLocation;