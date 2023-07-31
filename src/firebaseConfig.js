import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const app =initializeApp ({
    apiKey:"AIzaSyCuOzHvdmG7uS1N-Z8oyzH0OJoIroXg8fY",
    authDomain:"reactproject-f9766.firebaseapp.com",
    projectId:"reactproject-f9766",
    storageBucket:"reactproject-f9766.appspot.com",
    messagingSenderId:"709482373448",
    appId:"1:709482373448:web:33ee9aa74881d52d7c137d"
});

const storage = getStorage(app);
export default storage;