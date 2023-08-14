import React from "react";
import { Link } from "react-router-dom";
import frame2image from "../images/frame2.jpg.png";
import image from "../images/Frame.jpg.png";
import "../App.css";

const ForgotPassword = () => {
  const handleSendButtonClick = () => {
    // Implement your logic for sending the password reset email
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <div className="forgot-page-img">
          <img src={frame2image} alt="Image" />
        </div>
        <div className="forgot-password-page">
          <h2 className="heading-forgot-page">Forgot Password?</h2>
          <p className="sub-heading-forgot-page">
            Enter your Email address below and we will send you a password
            reset OTP.
          </p>
          <div className="inputfiled-forgot-page">
            <input
              className="email-forgot-page"
              type="email"
              placeholder="Email Address"
            />
            <button className="send-button" onClick={handleSendButtonClick}>
              Send
            </button>
          </div>
          <div className="last-div-forgot">
            <div className="last-1-forgot">Already have an account?</div>
            <Link to="/signin" className="last-2-forgot">
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <div className="right-div">
        <img src={image} alt="Image" />
      </div>
    </div>
  );
};

export default ForgotPassword;
