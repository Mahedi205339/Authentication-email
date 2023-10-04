import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.error(error))
    }
    const [user, setUser] = useState(null)
    //create user for sing in 

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in user for log in 

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('observing current user inside useEffect', currentUser)
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut,
        googleLogin ,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;

