import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const firebaseConfig = {
  apiKey: "AIzaSyC5ey8LRbmW41rktafwqJGcLPewfPcbw2A",
  authDomain: "docugram-52a37.firebaseapp.com",
  projectId: "docugram-52a37",
  storageBucket: "docugram-52a37.appspot.com",
  messagingSenderId: "349878058034",
  appId: "1:349878058034:web:f820b7a33ca1c42746102b",
  measurementId: "G-HSJMFXDD53"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const defaultState = {
  authType: 'Регистрация'
}

const reducer = (state:object = defaultState, action:any) => {
  switch (action.type) {
    case 'SET_AUTH_TYPE':
      return { ...state, authType: action.payload };
    default: 
      return state;
  }
}

const store = createStore(reducer);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)