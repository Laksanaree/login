import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAFFDEs_2h5gNkPt_4NOzIObS3c81qOlTU",
    authDomain: "fir-009-a5626.firebaseapp.com",
    projectId: "fir-009-a5626",
    storageBucket: "fir-009-a5626.appspot.com",
    messagingSenderId: "396881552660",
    appId: "1:396881552660:web:b0e69d48f9b55303548e01",
    measurementId: "G-0H4NW56DRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = firebase.firestore();
export const auth = firebase.auth();

