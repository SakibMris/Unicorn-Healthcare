import React, { createContext } from 'react';
import useFirebase from '../Firebase/useFirebase';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allConntext = useFirebase()
    return (
        <AuthContext.Provider value={allConntext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;