import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalProvider";

const Contact = () => {

    const { isLoggedIn ,handleLogin } = useContext(GlobalContext);

    return (
        <div className="flex flex-col justify-center items-center h-[100vh]">
            <h2>Contact Us Form</h2>
            <button onClick={handleLogin} className="btn btn-warning">Login Now</button>
            <p>
            {
                isLoggedIn ? "LoggedIn" : "Not LoggedIn"
            }
            </p>
        </div>
    );
};

export default Contact;