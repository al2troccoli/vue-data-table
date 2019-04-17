import { initializeApp} from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyANX2ukJmRoWI7JysXss-F9LvBQ5JX8b_Q",
    authDomain: "datatabletest.firebaseapp.com",
    databaseURL: "https://datatabletest.firebaseio.com",
    projectId: "datatabletest",
    storageBucket: "datatabletest.appspot.com",
    messagingSenderId: "213782361963"
};
const firebaseApp = initializeApp(firebaseConfig);

export const db = firebaseApp.database();
export const assetsRef = db.ref('assets');
export const titleRef = db.ref();
