import { createContext, useState } from "react";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo={
        createUser,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;