import React from "react";
import { Link } from "react-router-dom";
import frame2image from "../images/frame2.png";
import image from "../images/Frame.png";
import "../App.css";

/**
  Represents the Forgot Password page component.
 */
const ForgotPassword = () => {
  return (
    <div className="main-container">
      {/* Left Container */}
      <div className="left-container">
        {/* Image */}
        <div className="forgot-page-img">
          <img src={frame2image} alt="Image" />
        </div>
        {/* Forgot Password Form */}
        <div className="forgot-password-page">
          {/* Heading */}
          <h2 className="heading-forgot-page">Forgot Password?</h2>
          {/* Sub-heading */}
          <p className="sub-heading-forgot-page">
            Enter your Email address below and we will send you a password reset OTP.
          </p>
          {/* Input Field and Send Button */}
          <div className="inputfiled-forgot-page">
            <input
              className="email-forgot-page"
              type="email"
              placeholder="Email Address"
            />
            <Link to="/mailsent">
              <button className="send-button">Send</button>
            </Link>
          </div>
          {/* Sign In Prompt */}
          <div className="last-div-forgot">
            <div className="last-1-forgot">Already have an account?</div>
            <Link to="/signin" className="last-2-forgot">
              Sign In
            </Link>
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

export default ForgotPassword;

