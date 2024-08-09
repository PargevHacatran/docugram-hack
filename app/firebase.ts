// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC5ey8LRbmW41rktafwqJGcLPewfPcbw2A",
  authDomain: "docugram-52a37.firebaseapp.com",
  projectId: "docugram-52a37",
  storageBucket: "docugram-52a37.appspot.com",
  messagingSenderId: "349878058034",
  appId: "1:349878058034:web:f820b7a33ca1c42746102b",
  measurementId: "G-HSJMFXDD53"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
