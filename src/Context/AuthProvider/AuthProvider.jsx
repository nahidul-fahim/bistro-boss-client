import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);



const AuthProvider = ({ children }) => {

    const [currentUser, setCurrenUser] = useState('');
    const [loading, setLoading] = useState(true);


    // Create user using email-password
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Update the current user profile
    const updateUserProfile = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
    }


    // Login user with email-password
    const LogInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Logout the current user
    const LogOut = () => {
        setLoading(true);
        return signOut(auth);
    }


    // Track the current user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrenUser(user);
            setLoading(false);
            console.log("Current user:", user);
        });
        return () => unsubscribe();
    }, [])



    // send context value to the childrens
    const authInfo = { currentUser, loading, createNewUser, LogInUser, LogOut, updateUserProfile };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;