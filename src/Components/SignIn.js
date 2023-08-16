import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import frame2image from "../images/frame2.jpg.png";
import "../App.css";
import image from "../images/Frame.jpg.png";

const SignIn = () => {
  // Validation schema for Formik
  const signInValidationSchema = Yup.object().shape({
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
  });

  // Initial values for Formik form
  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    // JSX for the Formik sign-in form
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={signInValidationSchema}
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
                    <Link to="/forgotpassword" className="forgot-password">
                      Forgot Password?
                    </Link>
                  </div>
                  {/* Sign In Button */}
                  <button type="submit">Sign In</button>
                </div>
                {/* Last section */}
                <div className="main-last-login">
                  {/* "Don't have an account?" */}
                  <div className="last-1-login">Don't have an account?</div>
                  {/* "Sign Up" link */}
                  <Link to="/signup" className="last-2-login">
                    Sign Up
                  </Link>
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
};

export default SignIn;
