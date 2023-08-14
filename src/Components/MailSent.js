import React from "react";
import { Link } from "react-router-dom";
import "./app.css";
import image from "./images/Frame.jpg.png";

const MailSent = () => {
  return (
    <div className="main-container">
      <div className="left-container">
        <div className="mailsent">
          <h2 className="heading-mailsent">Check Mail</h2>
          <p className="sub-heading-mailsent">
            We have sent password recovery instructions to your email.
          </p>
          <div className="button-div-mailsent">
            <Link to="/signin" className="button-mailsent">
              Back to Sign In
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

export default MailSent;
