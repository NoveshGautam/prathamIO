import React from "react";
import { Formik, Field, Form } from "formik";

const MyForm = () => {
  const initialValues = {
    FullName: "",
    Email: "",
    Contact: "",
    City: "",
    year: "",
    Query: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(values, null, 2));
    resetForm();
  };

  return (
    <div style={styles.body}>
      <div style={styles.Container}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <div style={styles.rowContainer}>
              <div style={styles.fieldContainer}>
                <label
                  htmlFor="FullName"
                  style={{ ...styles.labelStyles, fontSize: "17px" }}
                >
                  Full Name
                </label>
                <Field
                  name="FullName"
                  placeholder="Jesse Gallagar"
                  style={{ ...styles.fullNameField, fontSize: "16px" }}
                />
              </div>

              <div style={styles.fieldContainer}>
                <label
                  htmlFor="Email"
                  style={{
                    ...styles.labelStyles,
                    fontSize: "17px",
                    marginLeft: "-90px",
                  }}
                >
                  Email Address
                </label>
                <Field
                  name="Email"
                  placeholder="Email Address"
                  style={{
                    ...styles.emailField,
                    fontSize: "16px",
                    marginLeft: "-90px",
                  }}
                />
              </div>
            </div>

            <div style={styles.rowContainer}>
              <div style={styles.fieldContainer}>
                <label
                  htmlFor="Contact"
                  style={{ ...styles.labelStyles, fontSize: "17px" }}
                >
                  Phone Number
                </label>
                <Field
                  name="Contact"
                  placeholder="Contact Number"
                  style={{ ...styles.contactField, fontSize: "16px" }}
                />
              </div>

              <div style={styles.fieldContainer}>
                <label
                  htmlFor="City"
                  style={{
                    ...styles.labelStyles,
                    fontSize: "17px",
                    marginLeft: "50px",
                  }}
                >
                  City
                </label>

                <Field
                  name="City"
                  placeholder="City"
                  style={{ ...styles.cityField, fontSize: "16px" }}
                />
              </div>

              <div style={styles.fieldContainer}>
                <label
                  htmlFor="year"
                  style={{ ...styles.labelStyles, fontSize: "17px" }}
                >
                  Year
                </label>
                <Field
                  name="year"
                  placeholder="Year"
                  style={{ ...styles.yearField, fontSize: "16px" }}
                />
              </div>
            </div>
            <div>
              <Field
                name="Query"
                placeholder="Your Query Here"
                component="textarea"
                style={styles.queryField}
              />
            </div>

            <div style={styles.fieldContainer}>
              <label style={styles.labelStyles}>
                <Field type="checkbox" name="AgreeToTerms" />
                Agree to terms and conditions
              </label>
            </div>

            <div>
              <button type="submit" style={styles.buttonStyles}>
                Send Query
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  Container: {
    width: "80%",
    maxWidth: "800px",
    height: "auto",
    minHeight: "400px",
    padding: "20px",
    marginLeft: "500px",
  },
  rowContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  fieldContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
  labelStyles: {
    fontWeight: "100",
  },
  fullNameField: {
    padding: "8px",
    border: "1px solid lightgray",
    borderRadius: "4px",
    marginBottom: "10px",
    width: "60%",
    marginTop: "10px",
  },

  emailField: {
    padding: "8px",
    border: "1px solid lightgray",
    borderRadius: "4px",
    marginBottom: "10px",
    marginTop: "10px",
    width: "370px",
  },
  contactField: {
    padding: "8px",
    border: "1px solid lightgray",
    borderRadius: "4px",
    marginBottom: "10px",
    width: "90%",
    marginTop: "10px",
  },
  cityField: {
    padding: "8px",
    border: "1px solid lightgray",
    borderRadius: "4px",
    marginBottom: "10px",
    width: "150px",
    marginTop: "10px",
    marginLeft: "50px",
  },
  yearField: {
    padding: "8px",
    border: "1px solid lightgray",
    borderRadius: "4px",
    marginBottom: "10px",
    width: "150px",
    marginTop: "10px",
  },
  queryField: {
    padding: "8px",
    border: "1px solid lightgray",
    borderRadius: "4px",
    width: "30%",
    resize: "vertical",
    minHeight: "70px",
    maxHeight: "800px",
    marginBottom: "15px",
  },
  buttonStyles: {
    background: "white",
    padding: "6px",
    color: "green",
    width: "100px",
    height: "30px",
    border: "1px solid black",
    marginTop: "30px",
  },
};

export default MyForm;
