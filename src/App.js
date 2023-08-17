import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultView from "./Components/DefaultView";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import MailSent from "./Components/MailSent";
import ResetPassword from "./Components/ResetPassword";
import Verification from "./Components/Verification";
import HomePage from "./Components/HomePage";
import "./App.css";

/* The main application component that handles routing and renders different views.*/
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the default view */}
        <Route path="/" element={<DefaultView />} />

        {/* Route for user sign-in */}
        <Route path="/signin" element={<SignIn />} />

        {/* Route for user sign-up */}
        <Route path="/signup" element={<SignUp />} />

        {/* Route for password recovery */}
        <Route path="/forgotpassword" element={<ForgotPassword />} />

        {/* Route for displaying a message after an email is sent */}
        <Route path="/mailsent" element={<MailSent />} />

        {/* Route for resetting password */}
        <Route path="/resetpassword" element={<ResetPassword />} />

        {/* Route for user verification */}
        <Route path="/verification" element={<Verification />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;
