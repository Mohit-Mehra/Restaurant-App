import {getApp, getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA6f3DLj94yGJyXsNPVidRNLKspGPngdOg",
    authDomain: "restaurantapp-a8896.firebaseapp.com",
    databaseURL: "https://restaurantapp-a8896-default-rtdb.firebaseio.com",
    projectId: "restaurantapp-a8896",
    storageBucket: "restaurantapp-a8896.appspot.com",
    messagingSenderId: "985777756277",
    appId: "1:985777756277:web:5baec545ed32188b94803c"
};

const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app)
const storage = getStorage(app)

export {app,firestore,storage};
  