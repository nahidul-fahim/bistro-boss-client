import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosOpen from "../../Hooks/useAxiosOpen/useAxiosOpen";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {

    const [currentUser, setCurrenUser] = useState('');
    const [loading, setLoading] = useState(true);
    const axiosOpen = useAxiosOpen();


    // Create user using email-password
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // create new user using google
    const GoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, GoogleProvider);
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
            if (user) {
                // get token and store in the client side
                const userInfo = { email: user.email };
                // console.log(userInfo);
                axiosOpen.post("/jwt", userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            }
            else {
                // TODO: Remove token
                localStorage.removeItem('access-token')
            }
            // console.log("Current user getting from AuthProvider:", user);
        });
        return () => unsubscribe();
    }, [axiosOpen])



    // send context value to the childrens
    const authInfo = { currentUser, loading, createNewUser, LogInUser, LogOut, updateUserProfile, GoogleSignIn };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;