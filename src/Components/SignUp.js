// import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { Link } from "react-router-dom";
// import * as Yup from "yup";
// import frame2image from "../images/frame2.png";
// import image from "../images/Frame.png";
// import "../App.css";

// const SignUp = () => {
//   // Validation schema for Formik
//   const signUpValidationSchema = Yup.object().shape({
//     firstName: Yup.string().required("First Name is required"),
//     lastName: Yup.string().required("Last Name is required"),
//     email: Yup.string()
//       .required("Email is required")
//       .matches(
//         /^[a-zA-Z_@.]*$/,
//         "username can only contain letters, underscores, and numbers"
//       ),
//     password: Yup.string()
//       .required("Password is required")
//       .min(8, "Password must be at least 8 characters")
//       .max(20, "Password can't be more than 20 characters"),
//   });

//   // Initial values for Formik form
//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//   };

//   const onSubmit = (values) => {
//     console.log(values);
//   };

//   return (
//     // JSX for the Formik sign-up form
//     <Formik
//       initialValues={initialValues}
//       onSubmit={onSubmit}
//       validationSchema={signUpValidationSchema}
//     >
//       <Form>
//         {/* Main container */}
//                 <div className="main-container">
//           {/* Left container */}
//           <div className="left-container">
//             {/* Signup page image*/}
//             <div className="signup-page-img">
//               <img src={frame2image} alt="Image" />
//             </div>
//             {/* Signup page */}
//             <div className="signup-page">
//               {/* Signup page mini*/}
//               <div className="signup-page-mini">
//                 {/* Signup heading */}
//                 <h2 className="heading-signup-page">Sign Up</h2>
//                 {/* Sub-heading */}
//                 <p className="sub-heading-signup-page">
//                   Enter your credentials to continue
//                 </p>
//                 {/* Input fields */}
//                 <div className="inputfield-signup">
//                   <div>
//                     {/* First Name field */}
//                     <Field
//                       className="firstname-signup"
//                       type="text"
//                       name="firstName"
//                       placeholder="First Name"
//                     />
//                     {/* Error message for first name*/}
//                     <ErrorMessage
//                       className="error-message"
//                       name="firstName"
//                       component="div"
//                     />
//                     {/* Last Name field */}
//                     <Field
//                       className="lastname-signup"
//                       type="text"
//                       name="lastName"
//                       placeholder="Last Name"
//                     />
//                     {/* Error message for last name */}
//                     <ErrorMessage
//                       className="error-message"
//                       name="lastName"
//                       component="div"
//                     />
//                   </div>
//                   {/* Email field */}
//                   <Field
//                     className="email-signup"
//                     type="email"
//                     name="email"
//                     placeholder="Email Address"
//                   />
//                   {/* Error message for email*/}
//                   <ErrorMessage
//                     className="error-message"
//                     name="email"
//                     component="div"
//                   />
//                   {/* Password field */}
//                   <Field
//                     className="password-signup"
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                   />
//                   {/* Error message for password*/}
//                   <ErrorMessage
//                     className="error-message"
//                     name="password"
//                     component="div"
//                   />
//                   {/* Security options */}
//                   <div className="security">
//                     {/* Checkbox for "Remember me" */}
//                     <label className="checkbox">
//                       <input type="checkbox" />
//                       Remember me
//                     </label>
//                   </div>
//                   {/* Sign Up Button */}
//                   <button type="submit">Sign Up</button>
//                 </div>
//                 {/* Last section */}
//                 <div className="last-signup">
//                   {/* "Already have an account?" */}
//                   <div className="last-1-signup">Already have an account?</div>
//                   {/* "Sign In" link */}
//                   <Link to="/signin" className="last-2-signup">
//                     Sign In
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Right container */}
//           <div className="right-div">
//             {/* Right container image */}
//             <img src={image} alt="Image" />
//           </div>
//         </div>
//       </Form>
//     </Formik>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { classNames } from "primereact/utils";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Divider } from "primereact/divider";
import frame2image from "../images/frame2.png";
import image from "../images/Frame.png";
import "../App.css";

const SignUp = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});

  const formik = useFormik({
    initialValues: {
      name: "",
      last: "",
      email: "",
      password: "",
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "first name is required.";
      }
      if (!data.last) {
        errors.last = "last name is required.";
      }

      if (!data.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Invalid email address. E.g. example@email.com";
      }

      if (!data.password) {
        errors.password = "Password is required.";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      setShowMessage(true);

      formik.resetForm();
    },
  });

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  const passwordFooter = (
    <React.Fragment>
      <Divider />
      <p className="mt-2">Suggestions</p>
      <ul className="pl-2 ml-2 mt-0" style={{ lineHeight: "1.5" }}>
        <li>At least one lowercase</li>
        <li>At least one uppercase</li>
        <li>At least one numeric</li>
        <li>Minimum 8 characters</li>
      </ul>
    </React.Fragment>
  );

  return (
    // JSX for the Formik sign-up form

    <form onSubmit={formik.handleSubmit}>
      {/* Main container */}
      <div className="main-container">
        {/* Left container */}
        <div className="left-container">
          {/* Signup page image*/}
          <div className="signup-page-img">
            <img src={frame2image} alt="Image" />
          </div>
          {/* Signup page */}
          <div className="signup-page">
            {/* Signup page mini*/}
            <div className="signup-page-mini">
              {/* Signup heading */}
              <h2 className="heading-signup-page">Sign Up</h2>
              {/* Sub-heading */}
              <p className="sub-heading-signup-page">
                Enter your credentials to continue
              </p>
              {/* Input fields */}
              <div className="inputfield-signup">
                <div className="field">
                  <span className="p-float-label">
                    <InputText
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      autoFocus
                      className={classNames({
                        "p-invalid": isFormFieldValid("name"),
                      })}
                    />
                    <label
                      htmlFor="name"
                      className={classNames({
                        "p-error": isFormFieldValid("name"),
                      })}
                    >
                      First Name
                    </label>
                  </span>
                  {getFormErrorMessage("name")}
                </div>
                <div className="field">
                  <span className="p-float-label">
                    <InputText
                      id="last"
                      name="last"
                      value={formik.values.last}
                      onChange={formik.handleChange}
                      autoFocus
                      className={classNames({
                        "p-invalid": isFormFieldValid("last"),
                      })}
                    />
                    <label
                      htmlFor="last"
                      className={classNames({
                        "p-error": isFormFieldValid("last"),
                      })}
                    >
                      Last Name
                    </label>
                  </span>
                  {getFormErrorMessage("last")}
                </div>
                <div className="field">
                  <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-envelope" />
                    <InputText
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className={classNames({
                        "p-invalid": isFormFieldValid("email"),
                      })}
                    />
                    <label
                      htmlFor="email"
                      className={classNames({
                        "p-error": isFormFieldValid("email"),
                      })}
                    >
                      Email
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
                      className={classNames({
                        "p-invalid": isFormFieldValid("password"),
                      })}
                      footer={passwordFooter}
                    />
                    <label
                      htmlFor="password"
                      className={classNames({
                        "p-error": isFormFieldValid("password"),
                      })}
                    >
                      Password
                    </label>
                  </span>
                  {getFormErrorMessage("password")}
                </div>

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
    </form>
  );
};

export default SignUp;
