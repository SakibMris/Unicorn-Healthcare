import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from "./firebase-init"

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

            .catch(error => {
                setError(error.message)
            })
    }
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        })
    });

    const handleRegistration = event => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
        event.preventDefault();
    }
    const emailChange = event => {
        setEmail(event.target.value);
    }
    const passwordChange = event => {
        console.log(email, password);
        setPassword(event.target.value)
    }
    const logInUsingEmail = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('');
            })
            .catch(error => {
                setError(error.message)
            })
    }
    return {
        signUsingGoogle,
        handleLogOut,
        user,
        error,
        handleRegistration,
        logInUsingEmail,
        emailChange,
        passwordChange,
    }

}

export default useFirebase;
