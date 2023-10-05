// create user with firstname, lastname, email and password && updateProfile to add extra informations
// create user with google login
// create user with facebook login

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { createContext, useEffect } from "react";

export const FirebaseAuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const createUserNormal = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUserNormal = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInformation = {
        createUserNormal,
        loginUserNormal
    }

    let i = 1;
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log("inside onAuthStateChanged");
            console.log(user);
            i = i + 1;
            console.log(i);
        })
        return () => {
            console.log("unsubscribed");
            unsubscribe()
        };
    }, []);

    return (
        <FirebaseAuthContext.Provider value={authInformation}>
            {children}
        </FirebaseAuthContext.Provider>
    );
};

export default AuthProvider;