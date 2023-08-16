import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import frame2image from "../images/frame2.png";
import image from "../images/Frame.png";
import "../App.css";

const SignUp = () => {
  // Validation schema for Formik
  const signUpValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
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
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    // JSX for the Formik sign-up form
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={signUpValidationSchema}
    >
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
                    />
                    {/* Error message for first name*/}
                    <ErrorMessage
                      className="error-message"
                      name="firstName"
                      component="div"
                    />
                    {/* Last Name field */}
                    <Field
                      className="lastname-signup"
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                    />
                    {/* Error message for last name*/}
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
                  <button type="submit">Sign Up</button>
                </div>
                {/* Last section */}
                <div className="last-signup">
                  {/* "Already have an account?" */}
                  <div className="last-1-signup">Already have an account?</div>
                  {/* "Sign In" link */}
                  <Link to="/signin" className="last-2-signup">
                    Sign In
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

export default SignUp;
