import { useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "./firebase-init"

initializeAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth();

    const signUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
    }
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
    return {
        signUsingGoogle,
        user,
        error,
        handleRegistration,
        emailChange,
        passwordChange,
    }

}

export default useFirebase;
