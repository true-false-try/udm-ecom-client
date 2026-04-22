import {useSelector} from "react-redux";
import {Navigate, Outlet} from "react-router-dom";

const PrivateRoute = ({ publicPage = false}) => {
    const { user } = useSelector(state => state.auth);
    if (publicPage) {
        return user ? <Navigate to="/profile" /> : <Outlet />
    }
}

export default PrivateRoute;