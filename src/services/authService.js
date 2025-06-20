import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateCurrentUser } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { extractString } from "../utils/authUtils";
import { toast } from "react-toastify";
import { auth } from "../config/firebase.config";

const handleAuthSubmit = (isGoogleAuth, isSignUp, email, password) => {
    if (isGoogleAuth) {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // console.log(user);
                toast.success("Logged in with Google Successfully");
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                // The email of the user's account used.
                const email = error.customData.email;
                // console.log(error);
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);

                toast.error(extractString(errorCode));
            });
        // return;
    }
    else {
        if (isSignUp) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((response) => {
                    // console.log(response);
                    toast.success("Signed up in successfully");
                }).catch((error) => {
                    const errorCode = error.code;
                    // const errorMessage = error.message;
                    toast.error(extractString(errorCode));
                })
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // console.log(user);
                    // console.log(getSerializableUser(user));
                    toast.success("Signed in in successfully");
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    toast.error(extractString(errorCode));
                });
        }
    }
}
export default handleAuthSubmit