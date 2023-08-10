
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//import './i18next';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  
    <App />
   
  
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*import React, { Suspense } from 'react';
import ReactDOM from 'react-dom'; // Import from 'react-dom' directly
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18next';
//import i18n from './i18next';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();*/


/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
            "hi, welcome back": "Hi, Welcome Back",
            "sign in": "Sign In",
            "don't have an account?": "Don't have an account?",
            "sign up": "Sign Up"
        }
      },
      hi: {
        translation: {
            "hi, welcome back": "नमस्ते, वापस स्वागत है",
            "sign in": "साइन इन करें",
            "don't have an account?": "खाता नहीं है?",
            "sign up": "साइन अप करें"
        }
      },
    },
    lng: "hi", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });
  function LoginPage(){
    const { t } = useTranslation();
    return (
      <>
      <LoginPage/>
      </>
    )
  }
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();*/