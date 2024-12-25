import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()
    // create new user
    const createNewUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user sign in using email password
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // user sign out
    const signOutUser = () =>{
        setLoading(true)
        return signOut(auth)
    }
    // update user info
    const updateUserProfile = (updateInfo) =>{
        return updateProfile(auth.currentUser, updateInfo)
    }

    // google popup sign in
    const popUpSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const authInfo = {
        user,
        setUser,
        loading,
        createNewUser,
        signInUser,
        signOutUser,
        updateUserProfile,
        popUpSignIn
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe()
        }
    },[])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;