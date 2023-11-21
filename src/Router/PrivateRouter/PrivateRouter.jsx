import { Navigate, useLocation } from "react-router-dom";
import useAuthProvider from "../../Hooks/useAuthProvider/useAuthProvider";


const PrivateRouter = ({ children }) => {

    const { currentUser, loading } = useAuthProvider();

    const location = useLocation();

    if (loading) {
        return <div className="h-[100vh] flex justify-center items-center text-center">
            <p className="text-4xl font-inter lowercase text-[gray] font-medium">Loading...</p>
        </div>
    }

    if (currentUser) {
        return children;
    }


    return <Navigate state={{ from: location }} to="/login" />
};

export default PrivateRouter;