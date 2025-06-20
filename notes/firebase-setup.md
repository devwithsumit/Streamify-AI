# Firebase Setup
## Prerequisites

- Node.js and npm installed
- Firebase account ([Sign up here](https://firebase.google.com/))

## 1. Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click **Add project** and follow the prompts.
3. Once created, go to **Project settings** and note your Firebase config.

## 2. Install Firebase SDK

```bash
npm install firebase
```

## 3. Configure Firebase in Your Project

Create a `firebase.config.js` file in `src/config/`:

```js
// src/firebase.config.js

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_AUTH_DOMAIN_HERE",
    projectId: "YOUR_PROJECT_ID_HERE",
    storageBucket: "YOUR_STORAGE_BUCKET_HERE",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID_HERE",
    appId: "YOUR_APP_ID_HERE",
    measurementId: "YOUR_MEASUREMENT_ID_HERE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
```

Replace the config values with those from your Firebase project.

## 4. Enable Authentication

1. In the Firebase Console, go to **Authentication > Get started**.
2. Enable the desired sign-in methods (e.g., Email/Password, Google).

## 5. Using Firebase Auth in Your App

Example: Sign up with email and password

```js
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase.config";

createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // User signed up
        const user = userCredential.user;
    })
    .catch((error) => {
        // Handle errors
        console.error(error);
    });
```

## 6. Resources

- [Firebase Authentication Docs](https://firebase.google.com/docs/auth)
- [Firebase JS SDK Reference](https://firebase.google.com/docs/reference/js)