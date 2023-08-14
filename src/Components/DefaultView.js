import React from "react";
import { Link } from "react-router-dom";
import image from "../images/Frame.jpg.png";
import frame2image from "../images/frame2.jpg.png";
import "../App.css";

const DefaultView = () => {
  return (
    <div className="main-container">
      {/*left container */}
      <div className="left-container">
        {/*image */}
        <div className="default-page-img">
          <img src={frame2image} alt="Image" />
        </div>
        {/* Mini Container */}
        <div className="mini-container">
          {/* Heading */}
          <div className="heading-container">
            <h2 className="heading">Hi, Welcome Back</h2>
          </div>
          {/* Sign In Button */}
          <div className="button-div">
            <Link to="/signin">
              <button>Sign in</button>
            </Link>
          </div>
          {/* Sign Up Prompt */}
          <div className="last">
            <div className="last-1">Do not have an account?</div>
            <Link to="/signup" className="last-2">
              Sign Up
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

export default DefaultView;
