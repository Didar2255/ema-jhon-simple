
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googelSignIn = () => {
        return signInWithPopup(auth, googleProvider)

            .catch(error => {
                setError(error.message)
            })
    }
    const hendelForm = (e) => {
        e.preventDefault()
    }
    const hendelLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {

            }
        })
    }, [])
    return { googelSignIn, user, error, hendelForm, hendelLogout }
}
export default useFirebase;