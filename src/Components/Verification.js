import React from "react";
import { Link } from "react-router-dom";
import image from "./images/Frame.jpg.png";
import "./app.css";

const Verification = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <div className="verification-page">
          <h2 className="heading-verification">Enter Verification Code</h2>
          <p className="sub-heading-verification">
            We've sent you a verification code on your email.
          </p>
          <div className="code-container">
            <div className="input-boxes">
              <input className="input-box" type="number" maxLength="1" />
              <input className="input-box" type="number" maxLength="1" />
              <input className="input-box" type="number" maxLength="1" />
              <input className="input-box" type="number" maxLength="1" />
            </div>
            <div className="continue-button-container">
              <button className="continue-button">Continue</button>
            </div>
          </div>
          <div className="last-div-verification">
            <div className="last-1-verif">
              Didn't receive the email? Check your spam filter, or{" "}
              <button className="resend-button">Resend Code</button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-div">
        <img src={image} alt="Image" />
      </div>
    </div>
  );
};

export default Verification;
