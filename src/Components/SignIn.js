// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { Link } from "react-router-dom";
// import * as Yup from "yup";
// import frame2image from "./images/frame2.png";
// import "./App.css";
// import image from "./images/Frame.png";

// const SignIn = () => {
//   const signInValidationSchema = Yup.object().shape({
//     email: Yup.string()
//       .required("Email is required")
//       .matches(
//         /^[a-zA-Z_@.0-9]*$/,
//         "Username can only contain letters, underscores, and numbers"
//       ),
//     password: Yup.string()
//       .required("Password is required")
//       .min(8, "Password must be at least 8 characters")
//       .max(20, "Password can't be more than 20 characters"),
//   });

//   const initialValues = {
//     email: "",
//     password: "",
//   };

//   const onSubmit = (values) => {
//     console.log(values);
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       onSubmit={onSubmit}
//       validationSchema={signInValidationSchema}
//     >
//       {({ touched, errors }) => (
//         <Form>
//           <div className="main-container">
//             <div className="left-container">
//               <div className="signin-page-img">
//                 <img src={frame2image} alt="Image" />
//               </div>
//               <div className="login-page-container">
//                 <div className="login-page-mini">
//                   <h2 className="heading-login-page">Sign In</h2>
//                   <p className="sub-heading-login-page">
//                     Enter your credentials to continue
//                   </p>
//                   <div className="input-field-login">
//                     <Field
//                       className="email-login"
//                       type="email"
//                       name="email"
//                       placeholder="Email Address"
//                     />
//                     {touched.email && errors.email && (
//                       <div className="error-message">{errors.email}</div>
//                     )}
//                     <Field
//                       className="password-login"
//                       type="password"
//                       name="password"
//                       placeholder="Password"
//                     />
//                     {touched.password && errors.password && (
//                       <div className="error-message">{errors.password}</div>
//                     )}
//                     <div className="security">
//                       <label className="checkbox">
//                         <input type="checkbox" />
//                         Remember me
//                       </label>
//                       <Link to="/forgotpassword" className="forgot-password">
//                         Forgot Password?
//                       </Link>
//                     </div>
//                     <button type="submit">Sign In</button>
//                   </div>
//                   <div className="main-last-login">
//                     <div className="last-1-login">Don't have an account?</div>
//                     <Link to="/signup" className="last-2-login">
//                       Sign Up
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="right-div">
//               <img src={image} alt="Image" />
//             </div>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default SignIn;


import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import frame2image from "../images/frame2.png";
import "../App.css";
import image from "../images/Frame.png";

const SignIn = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const initialValues = {
    email: "",
    password: "",
  };

  const validate = (data) => {
    let errors = {};

    if (!data.email) {
      errors.email = "Email is required.";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
      errors.email = "Invalid email address. E.g. example@email.com";
    }

    if (!data.password) {
      errors.password = "Password is required.";
    }

    return errors;
  };

  const onSubmit = (data) => {
    setFormData(data);
    setShowMessage(true);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  const isFormFieldValid = (name) => !!(
    formik.touched[name] && formik.errors[name]
  );

  const getFormErrorMessage = (name) => {
    return isFormFieldValid(name) && (
      <small className="p-error">{formik.errors[name]}</small>
    );
  };

  return (
    <form onSubmit={formik.handleSubmit}> 
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
                <div className="field">
                  <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-envelope" />
                    <InputText
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className={isFormFieldValid("email") ? "p-invalid" : ""}
                    />
                    <label
                      htmlFor="email"
                      className={isFormFieldValid("email") ? "p-error" : ""}
                    >
                      Email*
                    </label>
                  </span>
                  {getFormErrorMessage("email")}
                </div>
                <div className="field">
                  <span className="p-float-label">
                    <Password
                      id="password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      toggleMask
                      className={isFormFieldValid("password") ? "p-invalid" : ""}
                    />
                    <label
                      htmlFor="password"
                      className={isFormFieldValid("password") ? "p-error" : ""}
                    >
                      Password*
                    </label>
                  </span>
                  {getFormErrorMessage("password")}
                </div>
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
    </form>
  );
};

export default SignIn;
