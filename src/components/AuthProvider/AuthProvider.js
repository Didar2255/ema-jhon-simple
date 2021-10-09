import React from 'react';
import { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const authfirebase = useFirebase()
    return (
        <AuthContext.Provider value={authfirebase}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;