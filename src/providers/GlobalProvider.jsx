import { createContext, useState } from "react";

export const GlobalContext =  createContext(null);

const GlobalProvider = ( {children} ) => {

    const [logged, setLogged] = useState(false);

    const handleLogin = () => {
        setLogged(!logged);
    }

    const globalInfo = {
        name: 'barik',
        isLearning: true,
        isLoggedIn: logged,
        handleLogin
    }

    return (
        <GlobalContext.Provider value={globalInfo}>
            {
                children
            }
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;