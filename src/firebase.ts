// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // 안되면 수동으로

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi5Qc2BlX-2SsrNawZdDCuticlQTUf7ig",
  authDomain: "cgwitter.firebaseapp.com",
  projectId: "cgwitter",
  storageBucket: "cgwitter.appspot.com",
  messagingSenderId: "172745276576",
  appId: "1:172745276576:web:cfad14527b96a5088c9dc5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// app에 대한 auth를 진행하겠다.
// firebase/auth에 있는 getAuth를 사용하고 자동 import안되면 수동으로 하기.
export const auth = getAuth(app);
