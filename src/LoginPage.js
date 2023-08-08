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
        /^[a-zA-Z_]*$/,
        "Username can only contain letters and underscores"
      ),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])/,
        "Password must contain at least one uppercase letter"
      ),
    firstName: Yup.string().required("first Name is required"),
    lastName: Yup.string().required("last Name is required"),
  });

  // Initial values for Formik form
  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
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
        <div className="left-container">
          <img
            src={frame2image}
            style={{ width: "428px", height: "40px" }}
            alt="Image"
          />

          <div className="mini-container">
            <div className="heading-container">
              <h2 className="heading">Hi, Welcome Back</h2>
            </div>
            <div className="button-div">
              <button onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className="last">
              <div className="last-1">Don't have an account?</div>
              <div className="last-2" onClick={handleSignUpClick}>
                Sign Up
              </div>
            </div>
          </div>
        </div>
        <div className="right-div">
          <img src={image} style={{ width: "832px" }} alt="Image" />
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
          <div className="main-container">
            <div className="left-container">
              <img
                src={frame2image}
                style={{
                  width: "350px",
                  height: "40px",
                  background: "white",
                  marginTop: "-10px",
                }}
                alt="Image"
              />

              <div className="login-page-container">
                <div className="login-page-mini">
                  <h2 className="heading-login-page">Sign In</h2>
                  <p className="sub-heading-login-page">
                    Enter your credentials to continue
                  </p>

                  <div className="input-field-login">
                    <Field
                      className="email-login"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    <ErrorMessage
                      className="error-message"
                      name="email"
                      component="div"
                    />
                    <Field
                      className="password-login"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <ErrorMessage
                      className="error-message"
                      name="password"
                      component="div"
                    />
                    <div className="security">
                      <label className="checkbox">
                        <input type="checkbox" />
                        Remember me
                      </label>
                      <div
                        className="forgot-password"
                        onClick={handleForgotPasswordClick}
                      >
                        Forgot Password?
                      </div>
                    </div>
                    <button>Sign In</button>
                  </div>
                  <div className="main-last-login">
                    <div className="last-1-login">Don't have a account?</div>
                    <div className="last-2-login" onClick={handleSignUpClick}>
                      Sign Up
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-div">
              <img src={image} style={{ width: "832px" }} alt="Image" />
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
          <div className="main-container">
            <div className="left-container">
              <img
                src={frame2image}
                style={{
                  width: "350px",
                  height: "40px",
                  background: "white",
                  marginTop: "-10px",
                }}
                alt="Image"
              />
              <div className="signup-page">
                <div className="signup-page-mini">
                  <h2 className="heading-signup-page">Sign Up</h2>
                  <p className="sub-heading-signup-page">
                    Enter your credentials to continue
                  </p>
                  <div className="inputfield-signup">
                    <div>
                      <Field
                        className="firstname-signup"
                        type="FirstName"
                        name="FirstName"
                        placeholder="First Name"
                      />
                      <ErrorMessage
                        className="error-message"
                        name="firstName"
                        component="div"
                      />
                      <Field
                        className="lastname-signup"
                        type="lastName"
                        name="lastName"
                        placeholder="Last Name"
                      />
                      <ErrorMessage
                        className="error-message"
                        name="lastName"
                        component="div"
                      />
                    </div>
                    <Field
                      className="email-signup"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                    <ErrorMessage
                      className="error-message"
                      name="email"
                      component="div"
                    />

                    <Field
                      className="password-signup"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    <ErrorMessage
                      className="error-message"
                      name="password"
                      component="div"
                    />
                    <div className="security">
                      <label className="checkbox">
                        <input type="checkbox" />
                        Remember me
                      </label>
                    </div>
                    <button onClick={handleSignUpClick}>Sign up</button>
                  </div>
                  <div className="last-signup">
                    <div className="last-1-signup">
                      Already have an account?
                    </div>
                    <div className="last-2-signup" onClick={handleSignInClick}>
                      Sign In
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-div">
              <img src={image} style={{ width: "832px" }} alt="Image" />
            </div>
          </div>
        </Form>
      </Formik>
    );
  } else if (isForgotPasswordClicked) {
    return (
      
      <div className="main-container">
        <div className="left-container">
          <img
            src={frame2image}
            style={{
              width: "350px",
              height: "45px",
              background: "white",
              margintop: "10px",
            }}
            alt="Image"
          />

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
          <img src={image} style={{ width: "832px" }} alt="Image" />
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
          <img src={image} style={{ width: "832px" }} alt="Image" />
        </div>
      </div>
    );
  } else if (isBackToSignIn) {
    return (
      <div className="main-container">
        <div className="left-container">
          <div
            className="reset-page"
          >
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

                <button
                  className="reset-button"
                  style={{
                    background: "#004679",
                    color: "white",
                    width: "100%",
                    height: "44px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "18px",
                    borderRadius: "4px",
                    marginTop: "30px",
                    font: "roboto",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                  onClick={handleResetClick}
                >
                  Reset Password
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="right-div">
          <img src={image} style={{ width: "832px" }} alt="Image" />
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
          <img src={image} style={{ width: "832px" }} alt="Image" />
        </div>
      </div>
    );
  }
};

export default LoginForm;
