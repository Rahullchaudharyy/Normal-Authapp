import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBGFebzcLzNOdlsPm4svysxA3yezXwa74g",
    authDomain: "by-myself-auth.firebaseapp.com",
    projectId: "by-myself-auth",
    storageBucket: "by-myself-auth.appspot.com",
    messagingSenderId: "904816520113",
    appId: "1:904816520113:web:6f9f0540f58b9d7fb72b90"
  };

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  export {auth};
  