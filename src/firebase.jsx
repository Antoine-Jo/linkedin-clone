import { initializeApp } from 'firebase/app'
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyBBpW_nEAxW_2gwz_QbOZUQ5oX492ZKM00",
    authDomain: "linkedin-clone-49e17.firebaseapp.com",
    projectId: "linkedin-clone-49e17",
    storageBucket: "linkedin-clone-49e17.appspot.com",
    messagingSenderId: "123162855764",
    appId: "1:123162855764:web:6d0e87d34430f3000620c1"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// const auth = initializeApp.auth();

export { db };