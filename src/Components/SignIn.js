import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import frame2image from "../images/frame2.png";
import "../App.css";
import image from "../images/Frame.png";

const SignIn = () => {
  const signInValidationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .matches(
        /^[a-zA-Z_@.0-9]*$/,
        "Username can only contain letters, underscores, and numbers"
      ),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password can't be more than 20 characters"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={signInValidationSchema}
    >
      {({ touched, errors }) => (
        <Form>
          <div className="main-container">
            <div className="left-container">
              <div className="signin-page-img">
                <img src={frame2image} alt="Image" />
              </div>
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
                    {touched.email && errors.email && (
                      <div className="error-message">{errors.email}</div>
                    )}
                    <Field
                      className="password-login"
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                    {touched.password && errors.password && (
                      <div className="error-message">{errors.password}</div>
                    )}
                    <div className="security">
                      <label className="checkbox">
                        <input type="checkbox" />
                        Remember me
                      </label>
                      <Link to="/forgotpassword" className="forgot-password">
                        Forgot Password?
                      </Link>
                    </div>
                    <button type="submit">Sign In</button>
                  </div>
                  <div className="main-last-login">
                    <div className="last-1-login">Don't have an account?</div>
                    <Link to="/signup" className="last-2-login">
                      Sign Up
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-div">
              <img src={image} alt="Image" />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
