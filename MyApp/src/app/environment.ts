// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpwHLVVwTyxvF3d80MyIur_SXiC1qAjKI",
  authDomain: "angular-project-f5fdc.firebaseapp.com",
  databaseURL: "https://angular-project-f5fdc-default-rtdb.firebaseio.com",
  projectId: "angular-project-f5fdc",
  storageBucket: "angular-project-f5fdc.appspot.com",
  messagingSenderId: "658495015215",
  appId: "1:658495015215:web:dee28b862703b2d0c779da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const environment = {
  production: false,
  firebase: {
    apiKey: 'xxx',
    authDomain: 'bezkoder-firebase.firebaseapp.com',
    databaseURL: 'https://bezkoder-firebase.firebaseio.com',
    projectId: 'bezkoder-firebase',
    storageBucket: 'bezkoder-firebase.appspot.com',
    messagingSenderId: 'xxx',
    appId: 'xxx'
  }
};