import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import image from "../images/Frame.png";

/**
 * Represents the Reset Password page component.
 * Allows users to choose and confirm a new password for their account.
 */
const ResetPassword = () => {
  return (
    <div className="main-container">
      {/* Left Container */}
      <div className="left-container">
        <div className="reset-page">
          <div className="reset-mini-div">
            {/* Heading */}
            <h2 className="heading-reset-page">Reset Password</h2>
            {/* Sub-heading */}
            <p className="sub-heading-reset-page">
              Please choose your new password
            </p>

            {/* Input Fields and Reset Password Button */}
            <div className="inputfield-reset-page">
              {/* New Password Input */}
              <input
                className="new-password-input"
                type="password"
                placeholder="New password"
              />

              {/* Confirm Password Input */}
              <input
                className="confirm-password"
                type="password"
                placeholder="Confirm password"
              />
              {/* Reset Password Button */}
              <Link to="/verification">
                <button className="reset-button"> Reset Password</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Right Container */}
      <div className="right-div">
        <img src={image} alt="Image" />
      </div>
    </div>
  );
};

export default ResetPassword;
