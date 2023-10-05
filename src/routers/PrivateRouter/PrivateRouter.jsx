import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalProvider";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRouter = ({children}) => {

    const {isLoggedIn} = useContext(GlobalContext);

    if (isLoggedIn) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
    
};

export default PrivateRouter;