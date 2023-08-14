import React from "react";
import { Link } from "react-router-dom";
import "./app.css";
import image from "./images/Frame.jpg.png";

const ResetPassword = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <div className="reset-page">
          <div className="reset-mini-div">
            <h2 className="heading-reset-page">Reset Password</h2>
            <p className="sub-heading-reset-page">
              Please choose your new password
            </p>

            <div className="inputfield-reset-page">
              <input
                className="new-password-input"
                type="password"
                placeholder="New password"
              />

              <input
                className="confirm-password"
                type="password"
                placeholder="Confirm password"
              />

              <button className="reset-button">Reset Password</button>
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

export default ResetPassword;
