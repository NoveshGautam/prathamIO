import React,{useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import image from "./images/Frame.jpg.png";
import MyForm from './Form';

const LoginForm = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const onSubmit = (values) => {
   
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "username Required";
    }

    if (!values.password) {
      errors.password = "password Required";
    }

    return errors;
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
      <Form>
        <div>
          <label htmlFor="username" style={styles.label}>Username</label>
          <Field type="username" id="username" name="username" style={styles.inputField} />
          <ErrorMessage name="username" component="div"  style={styles.errorText}/>
        </div>
        <div>
          <label htmlFor="password" style={styles.label}>Password</label>
          <Field type="password" id="password" name="password" style={styles.inputField}/>
          <ErrorMessage name="password" component="div"  style={styles.errorText}/>
        </div>
        <button type="submit" style={styles.loginButton}>Log In</button>
        <hr className="divider" />
       
      </Form>
    </Formik>
  );
};

const App = () => {
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
    <div style={styles.containerStyle}>
      <div style={styles.subcontainer1Style}>
        <div style={styles.miniContainer}>
       
         
          <LoginForm />

          <button type="button" style={styles.signUpButton} onClick={SignupClick}>signup</button>
        </div>
      </div>
      <div style={styles.subcontainer2Style}>
        <img src={image} style={styles.image} alt="Image" />
      </div>
    </div>
  );
};

const styles = {
  containerStyle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100vh",
    background: "black",
  },

  subcontainer1Style: {
    flex: 0.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   
    background: "white",
  },

  subcontainer2Style: {
    flex: 0.5,
    display: "flex",

   
  },
  image: {
    width: "832px",
  },
  
  miniContainer: {
    height: "550px",
    width: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
   // background: "lightblue",
    borderRadius: "10px",
  },
  loginButton: {
    backgroundColor: "blue",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    margin: "20px 0",
    border: "none",
    cursor: "pointer",
    width: '100px',
    height: '40px'
  },

  signUpButton: {
    backgroundColor: "green",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    margin: "10px 0",
    border: "none",
    cursor: "pointer",
    width: '100px',
    height: '40px'
  },
  inputField: {
    width: "90%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    margin: "2px 5",
  },

  label: {
    display: "block",
    marginBottom: "0px",
    fontSize: "20px",
    fontWeight: '100',
    marginTop: '15px'
  },
  errorText: {
    color: "red",
    fontSize: "14px",
    marginTop: "5px",
  },
};

export default App;
