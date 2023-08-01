import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import MyForm from './Form';

const LoginForm = () => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      onSubmit={(values) => {
        console.log("Submitting login form", values);
      }}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Username is required";
        }
        if (!values.password) {
          errors.password = "Password is required";
        }
        return errors;
      }}
    >
      {() => (
        <Form className="login-form">
          <div className="inputText" style={styles.inputText}>
            <label htmlFor="username" className="username">
              Username
            </label>
            <div>
              <Field
                id="username"
                name="username"
                as={InputText}
                type="text"
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
          </div>
          <div className="inputText" style={styles.inputText}>
            <label htmlFor="password" className="password">
              Password
            </label>
            <div>
              <Field
                id="password"
                name="password"
                as={InputText}
                type="password"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
          </div>
          <Button type="submit" label="Login" className="button" />
        </Form>
      )}
    </Formik>
  );
};

const LoginPage = () => {
  const [Signup, setSignup] = useState(false);

  const SignupClick = () => {
    setSignup(true);
  };

  const LoginClick = () => {
    setSignup(false);
  };

  if (Signup) {
    return <MyForm />;
  }

  return (
    <div className="loginPage" style={styles.login}>
      <div className="container" style={styles.container}>
        <div className="main">
          <LoginForm />
        </div>

        <Divider layout="horizontal" className="line" align="center">
          <b>OR</b>
        </Divider>

        <div className="buttos">
          <Button
            label="Sign Up"
            className="signup-button p-button-success"
            onClick={SignupClick}
          ></Button>
        </div>
      </div>
    </div>
  );
};


const styles = {
  login: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  container: {
    maxWidth: "800px",
    height: "auto",
    minHeight: "100px",
    padding: "20px",
  },
  inputText: {
    marginBottom: "15px",
  },
};

export default LoginPage;