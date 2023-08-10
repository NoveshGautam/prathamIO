import React, { useState } from "react";
import "./App.css";
import image from "./images/Frame.jpg.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import frame2image from "./images/frame2.jpg.png";

const LoginForm = () => {
  // State for controlling different UI views
  const [isSignInClicked, setIsSignInClicked] = useState(false);
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);
  const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);
  const [isMailSent, setIsMailSent] = useState(false);
  const [isBackToSignIn, setIsBackToSignIn] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);

  // Handlers for different UI transitions
  const handleSignInClick = () => {
    setIsSignInClicked(true);
    setIsSignUpClicked(false);
    setIsForgotPasswordClicked(false);
    setIsMailSent(false);
    setIsBackToSignIn(false);
    setIsResetPassword(false);
  };

  const handleSignUpClick = () => {
    setIsSignInClicked(false);
    setIsSignUpClicked(true);
    setIsForgotPasswordClicked(false);
    setIsMailSent(false);
    setIsBackToSignIn(false);
    setIsResetPassword(false);
  };
  const handleForgotPasswordClick = () => {
    setIsSignInClicked(false);
    setIsSignUpClicked(false);
    setIsForgotPasswordClicked(true);
    setIsMailSent(false);
    setIsBackToSignIn(false);
    setIsResetPassword(false);
  };
  const handleSendButtonClick = () => {
    setIsForgotPasswordClicked(false);
    setIsMailSent(true);
    setIsBackToSignIn(false);
    setIsResetPassword(false);
  };
  const handleBackToSignInClick = () => {
    setIsForgotPasswordClicked(false);
    setIsMailSent(false);
    setIsBackToSignIn(true);
    setIsResetPassword(false);
  };
  const handleResetClick = () => {
    setIsForgotPasswordClicked(false);
    setIsMailSent(false);
    setIsBackToSignIn(false);
    setIsResetPassword(true);
  };
  // Validation schema for Formik
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^[a-zA-Z_@.]*$/,
        "Username can only contain letters, underscores, and @"
      ),

    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password can't be more than 20 characters"),

    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
  });

  // Initial values for Formik form

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const onSubmit = (values) => {
    console.log(values);
  };

  // Render different UI components based on state
  if (
    !isSignInClicked &&
    !isSignUpClicked &&
    !isForgotPasswordClicked &&
    !isMailSent &&
    !isBackToSignIn &&
    !isResetPassword
  ) {
    return (
      // JSX for the default view
      <div className="main-container">
        {/*left container */}
        <div className="left-container">
          {/*image */}
          <div className=" default-page-img">
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
              <button onClick={handleSignInClick}>Sign in</button>
            </div>
            {/* Sign Up Prompt */}
            <div className="last">
              <div className="last-1">Do not have an account?</div>
              <div className="last-2" onClick={handleSignUpClick}>
                Sign Up
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
  } else if (isSignInClicked) {
    return (
      // JSX for the Formik sign-in form
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          {/* Main container */}
          <div className="main-container">
            {/* Left container */}
            <div className="left-container">
              {/* Sign-in page image */}
              <div className="signin-page-img">
                <img src={frame2image} alt="Image" />
              </div>
              {/* Login page container */}
              <div className="login-page-container">
                {/* Login page mini */}
                <div className="login-page-mini">
                  {/* Sign-in heading */}
                  <h2 className="heading-login-page">Sign In</h2>
                  {/* Sub-heading */}
                  <p className="sub-heading-login-page">
                    Enter your credentials to continue
                  </p>

                  {/* Input fields */}
                  <div className="input-field-login">
                    {/* Email field */}
                    <Field
                      className="email-login"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    {/* Error message for email */}
                    <ErrorMessage
                      className="error-message"
                      name="email"
                      component="div"
                    />
                    {/* Password field */}
                    <Field
                      className="password-login"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    {/* Error message for password */}
                    <ErrorMessage
                      className="error-message"
                      name="password"
                      component="div"
                    />
                    {/* Security options */}
                    <div className="security">
                      {/* Checkbox for "Remember me" */}
                      <label className="checkbox">
                        <input type="checkbox" />
                        Remember me
                      </label>
                      {/* "Forgot Password?" link */}
                      <div
                        className="forgot-password"
                        onClick={handleForgotPasswordClick}
                      >
                        Forgot Password?
                      </div>
                    </div>
                    {/* Sign In Button */}
                    <button>Sign In</button>
                  </div>
                  {/* Last section */}
                  <div className="main-last-login">
                    {/* "Don't have an account?" */}
                    <div className="last-1-login">Don't have an account?</div>
                    {/* "Sign Up" link */}
                    <div className="last-2-login" onClick={handleSignUpClick}>
                      Sign Up
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right container */}
            <div className="right-div">
              {/* Right container image */}
              <img src={image} alt="Image" />
            </div>
          </div>
        </Form>
      </Formik>
    );
  } else if (isSignUpClicked) {
    return (
      // JSX for the Formik sign-up form
      <Formik initialValues={initialValues} validationSchema={validationSchema}>
        <Form>
          {/* Main container */}
          <div className="main-container">
            {/* Left container */}
            <div className="left-container">
              {/* Signup page image */}
              <div className="signup-page-img">
                <img src={frame2image} alt="Image" />
              </div>
              {/* Signup page */}
              <div className="signup-page">
                {/* Signup page mini */}
                <div className="signup-page-mini">
                  {/* Signup heading */}
                  <h2 className="heading-signup-page">Sign Up</h2>
                  {/* Sub-heading */}
                  <p className="sub-heading-signup-page">
                    Enter your credentials to continue
                  </p>
                  {/* Input fields */}
                  <div className="inputfield-signup">
                    <div>
                      {/* First Name field */}
                      <Field
                        className="firstname-signup"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                      />{/* Error message for first name*/}
                      <ErrorMessage
                        className="error-message"
                        name="firstName"
                        component="div"
                      />
                      {/* Last Name field */}
                      <Field
                        className="lastname-signup"
                        type="lastName"
                        name="lastName"
                        placeholder="Last Name"
                      />{/* Error message for last name*/}
                      <ErrorMessage
                        className="error-message"
                        name="lastName"
                        component="div"
                      />
                    </div>
                    {/* Email field */}
                    <Field
                      className="email-signup"
                      type="email"
                      name="email" // Make sure this matches your initial values keys
                      placeholder="Email Address"
                    />

                    {/* Error message for email */}
                    <ErrorMessage
                      className="error-message"
                      name="email"
                      component="div"
                    />
                    {/* Password field */}
                    <Field
                      className="password-signup"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    {/* Error message for password */}
                    <ErrorMessage
                      className="error-message"
                      name="password"
                      component="div"
                    />
                    {/* Security options */}
                    <div className="security">
                      {/* Checkbox for "Remember me" */}
                      <label className="checkbox">
                        <input type="checkbox" />
                        Remember me
                      </label>
                    </div>
                    {/* Sign Up Button */}
                    <button onClick={handleSignUpClick}>Sign up</button>
                  </div>
                  {/* Last section */}
                  <div className="last-signup">
                    {/* "Already have an account?" */}
                    <div className="last-1-signup">
                      Already have an account?
                    </div>
                    {/* "Sign In" link */}
                    <div className="last-2-signup" onClick={handleSignInClick}>
                      Sign In
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Right container */}
            <div className="right-div">
              {/* Right container image */}
              <img src={image} alt="Image" />
            </div>
          </div>
        </Form>
      </Formik>
    );
  } else if (isForgotPasswordClicked) {
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
              <div className="last-2-forgot" onClick={handleSignInClick}>
                Sign In
              </div>
            </div>
          </div>
        </div>
        <div className="right-div">
          <img src={image} alt="Image" />
        </div>
      </div>
    );
  } else if (isMailSent) {
    return (
      <div className="main-container">
        <div className="left-container">
          <div className="mailsent">
            <h2 className="heading-mailsent">Check Mail</h2>
            <p className="sub-heading-mailsent">
              We have sent password recovery instructions to your email.
            </p>
            <div className="button-div-mailsent">
              <button
                className="button-mailsent"
                onClick={handleBackToSignInClick}
              >
                Back to Sign In
              </button>
            </div>
          </div>
        </div>
        <div className="right-div">
          <img src={image} alt="Image" />
        </div>
      </div>
    );
  } else if (isBackToSignIn) {
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
                  type="Password"
                  placeholder="New password"
                />

                <input
                  className="confirm-password"
                  type="password"
                  placeholder="confirm password"
                />

                <button className="reset-button" onClick={handleResetClick}>
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-div">
          <img src={image} alt="Image" />
        </div>
      </div>
    );
  } else if (isResetPassword) {
    return (
      <div className="main-container">
        <div className="left-container">
          <div className="verification-page">
            <h2 className="heading-verification">Enter Verification Code</h2>
            <p className="sub-heading-verification">
              We've send you on John****@gmail.com
            </p>
            <div className="code-container">
              <div className="input-boxes">
                <input className="input-box1" type="number" placeholder="0" />
                <input className="input-box2" type="number" placeholder="0" />
                <input className="input-box3" type="number" placeholder="0" />
                <input className="input-box4" type="number" placeholder="0" />
              </div>
              <div className="continue-button-container">
                <button className="continue-button">Continue</button>
              </div>
            </div>
            <div className="last-div-verification">
              <div className="last-1-verif">
                Did not recieve the email? Check your spam filter, or
              </div>
              <button className="resend-button">Resend Code</button>
            </div>
          </div>
        </div>
        <div className="right-div">
          <img src={image} alt="Image" />
        </div>
      </div>
    );
  }
};

export default LoginForm;
