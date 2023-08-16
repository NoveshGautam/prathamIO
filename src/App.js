import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import DefaultView from "./Components/DefaultView";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import ForgotPassword from "./Components/ForgotPassword";
import MailSent from "./Components/MailSent";
import ResetPassword from "./Components/ResetPassword";
import Verification from "./Components/Verification";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultView />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/mailsent" element={<MailSent />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/verification" element={<Verification />} />
      </Routes>
    </Router>
  );
};

export default App;
