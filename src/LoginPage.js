import React, { useState } from "react";
import image from "./images/Frame.jpg.png";
import frame2image from "./images/frame2.jpg.png";

const LoginForm = () => {
  const [isSignInClicked, setIsSignInClicked] = useState(false);
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);
  const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);
  const [isMailSent, setIsMailSent] = useState(false);

  const handleSignInClick = () => {
    setIsSignInClicked(true);
    setIsSignUpClicked(false);
    setIsForgotPasswordClicked(false);
    setIsMailSent(false);
  };

  const handleSignUpClick = () => {
    setIsSignInClicked(false);
    setIsSignUpClicked(true);
    setIsForgotPasswordClicked(false);
    setIsMailSent(false);
  };
  const handleForgotPasswordClick = () => {
    setIsSignInClicked(false);
    setIsSignUpClicked(false);
    setIsForgotPasswordClicked(true);
    setIsMailSent(false);
  };
  const handleSendButtonClick = () => {
    setIsForgotPasswordClicked(false);
    setIsMailSent(true);
  };

  if (
    !isSignInClicked &&
    !isSignUpClicked &&
    !isForgotPasswordClicked &&
    !isMailSent
  ) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          style={{
            flex: 0.5,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{ width: "350px", height: "300px", position: "relative" }}
          >
            <img
              src={frame2image}
              style={{ width: "350px", height: "40px", background: "white" }}
              alt="Image"
            />
            <div
              style={{
                width: "375px",
                height: "50px",
                background: "white",
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  fontFamily: "Rubik",
                  fontWeight: "350",
                  fontSize: "24px",
                  color: " #093A5E",
                }}
              >
                Hi, Welcome Back
              </h2>
            </div>
            <div
              style={{
                width: "350px",
                height: "40px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                style={{
                  background: "#004679",
                  color: "white",
                  width: "350px",
                  height: "40px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </div>
            <div
              style={{
                position: "absolute",
                width: "350px",
                height: "70px",
                bottom: "0px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "black",
                background: "white",
              }}
            >
              <div
                style={{
                  width: "350px",
                  height: "35px",
                  textAlign: "center",
                  color: "gray",
                }}
              >
                don't have an account?
              </div>
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  width: "350px",
                  height: "35px",
                  textAlign: "center",
                  color: "blue",
                }}
                onClick={handleSignUpClick}
              >
                signup
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 0.5, display: "flex" }}>
          <img src={image} style={{ width: "832px" }} alt="Image" />
        </div>
      </div>
    );
  } else if (isSignInClicked) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          style={{
            flex: 0.5,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
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

          <div
            style={{
              position: "relative",
              width: "550px",
              height: "650px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "310px",
                height: "550px",
                position: "relative",
              }}
            >
              <h2
                style={{
                  marginTop: "0px",
                  fontFamily: "Rubik",
                  fontWeight: "310",
                  fontSize: "24px",
                  color: "#093A5E",
                  width: "310px",
                  height: "30px",
                  textAlign: "center",
                }}
              >
                Sign In
              </h2>
              <p
                style={{
                  width: "310px",
                  height: "30px",
                  textAlign: "center",
                  color: "gray",
                }}
              >
                Enter your credentials to continue
              </p>

              <div
                style={{
                  width: "310px",
                  height: "220px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <input
                  type="email"
                  style={{
                    width: "300px",
                    height: "40px",
                    padding: "5px",
                    marginBottom: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    background: "rgba(250,250,250,255)",
                  }}
                  placeholder="Email Address"
                />

                <input
                  type="password"
                  style={{
                    width: "300px",
                    height: "40px",
                    padding: "5px",
                    marginBottom: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    background: "rgba(250,250,250,255)",
                  }}
                  placeholder="Password"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#212121",
                      fontFamily: "roboto",
                      fontSize: "18px",
                      fontWeight: "150",
                    }}
                  >
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <div
                    style={{
                      color: "#2E1760",
                      textAlign: "center",
                    }}
                    onClick={handleForgotPasswordClick}
                  >
                    Forgot Password?
                  </div>
                </div>
                <button
                  style={{
                    background: "#004679",
                    color: "white",
                    width: "100%",
                    height: "40px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "18px",
                    borderRadius: "5px",
                    marginTop: "30px",
                  }}
                >
                  Sign In
                </button>
              </div>
              <div
                style={{
                  position: "absolute",
                  width: "350px",
                  height: "70px",
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "black",
                  background: "white",
                }}
              >
                <div
                  style={{
                    width: "350px",
                    height: "35px",
                    textAlign: "center",
                    color: "gray",
                  }}
                >
                  don't have an account?
                </div>
                <div
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    width: "350px",
                    height: "35px",
                    textAlign: "center",
                    color: "blue",
                  }}
                  onClick={handleSignUpClick}
                >
                  signup
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 0.5, display: "flex" }}>
          <img src={image} style={{ width: "832px" }} alt="Image" />
        </div>
      </div>
    );
  } else if (isSignUpClicked) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          style={{
            flex: 0.5,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
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
          <div
            style={{
              position: "relative",
              width: "550px",
              height: "650px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "310px",
                height: "550px",
                position: "relative",
              }}
            >
              <h2
                style={{
                  marginTop: "0px",
                  fontFamily: "Rubik",
                  fontWeight: "310",
                  fontSize: "24px",
                  color: "#093A5E",
                  width: "310px",
                  height: "30px",
                  textAlign: "center",
                }}
              >
                Sign Up
              </h2>
              <p
                style={{
                  width: "310px",
                  height: "30px",
                  textAlign: "center",
                  color: "gray",
                }}
              >
                Enter your credentials to continue
              </p>
              <div
                style={{
                  width: "310px",
                  height: "300px",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div className="form-inputs">
                  <input
                    type="text"
                    style={{
                      width: "130px",
                      height: "40px",
                      padding: "5px",
                      marginBottom: "10px",
                      marginRight: "25px",
                      fontSize: "16px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      background: "rgba(250,250,250,255)",
                    }}
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    style={{
                      width: "131px",
                      height: "40px",
                      padding: "5px",
                      marginBottom: "10px",
                      fontSize: "16px",
                      borderRadius: "5px",
                      border: "1px solid #ccc",
                      background: "rgba(250,250,250,255)",
                    }}
                    placeholder="Last Name"
                  />
                </div>
                <input
                  type="email"
                  style={{
                    width: "300px",
                    height: "40px",
                    padding: "5px",
                    marginBottom: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    background: "rgba(250,250,250,255)",
                  }}
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  style={{
                    width: "300px",
                    height: "40px",
                    padding: "5px",
                    marginBottom: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    background: "rgba(250,250,250,255)",
                  }}
                  placeholder="Password"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <label
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#212121",
                      fontFamily: "roboto",
                      fontSize: "18px",
                      fontWeight: "150",
                    }}
                  >
                    <input type="checkbox" />
                    Remember me
                  </label>
                </div>
                <button
                  style={{
                    background: "#004679",
                    color: "white",
                    width: "100%",
                    height: "40px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "18px",
                    borderRadius: "5px",
                    marginTop: "30px",
                  }}
                >
                  Sign up
                </button>
              </div>
              <div
                style={{
                  position: "absolute",
                  width: "350px",
                  height: "70px",
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  color: "black",
                  background: "white",
                }}
              >
                <div
                  style={{
                    width: "350px",
                    height: "35px",
                    textAlign: "center",
                    color: "gray",
                  }}
                >
                  Already have an account?
                </div>
                <div
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    width: "350px",
                    height: "35px",
                    textAlign: "center",
                    color: "blue",
                  }}
                  onClick={handleSignInClick}
                >
                  Sign In
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 0.5, display: "flex" }}>
          <img src={image} style={{ width: "832px" }} alt="Image" />
        </div>
      </div>
    );
  } else if (isForgotPasswordClicked) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          style={{
            flex: 0.5,
            display: "flex",
            // justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
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
          </div>
          <div
            style={{
              width: "310px",
              height: "550px",
              position: "relative",
              marginTop: "80px",
            }}
          >
            <h2
              style={{
                marginTop: "0px",
                fontFamily: "Rubik",
                fontWeight: "310",
                fontSize: "24px",
                color: "#093A5E",
                width: "310px",
                height: "30px",
                textAlign: "center",
              }}
            >
              Forgot Password?
            </h2>
            <p
              style={{
                width: "310px",
                height: "30px",
                textAlign: "center",
                color: "gray",
              }}
            >
              Enter your Email address below and we will send you a reset OTP.
            </p>
            <div
              style={{
                width: "310px",
                height: "130px",
                position: "absolute",
                top: "45%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <input
                type="email"
                style={{
                  width: "300px",
                  height: "60px",
                  padding: "5px",
                  marginBottom: "10px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  background: "rgba(250,250,250,255)",
                }}
                placeholder="Email Address"
              />

              <button
                style={{
                  background: "#004679",
                  color: "white",
                  width: "100%",
                  height: "70px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                  borderRadius: "5px",
                  marginTop: "20px",
                }}
                onClick={handleSendButtonClick}
              >
                Send
              </button>
            </div>
            <div
              style={{
                position: "absolute",
                width: "350px",
                height: "70px",
                bottom: "40px",
                left: "50%",
                transform: "translateX(-50%)",
                color: "black",
                background: "white",
              }}
            >
              <div
                style={{
                  width: "350px",
                  height: "35px",
                  textAlign: "center",
                  color: "gray",
                }}
              >
                Already have an account?
              </div>
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  width: "350px",
                  height: "35px",
                  textAlign: "center",
                  color: "blue",
                }}
                onClick={handleSignInClick}
              >
                Sign In
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 0.5, display: "flex" }}>
          <img src={image} style={{ width: "832px" }} alt="Image" />
        </div>
      </div>
    );
  } else if (isMailSent) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          style={{
            flex: 0.5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
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
          </div>
          <div
            style={{
              width: "310px",
              height: "450px",
              position: "relative",
              marginTop: "150px",
            }}
          >
            <h2
              style={{
                marginTop: "0px",
                fontFamily: "Rubik",
                fontWeight: "310",
                fontSize: "30px",
                color: "#093A5E",
                width: "310px",
                height: "30px",
                textAlign: "center",
              }}
            >
              Check Mail
            </h2>
            <p
              style={{
                width: "310px",
                height: "30px",
                textAlign: "center",
                color: "gray",
              }}
            >
              We have sent password recovery instructions to your email.
            </p>
            <div
              style={{
                width: "310px",
                height: "130px",
                position: "absolute",
                top: "55%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <button
                style={{
                  background: "#004679",
                  color: "white",
                  width: "100%",
                  height: "55px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                  borderRadius: "5px",
                  marginTop: "20px",
                }}
                onClick={handleSignInClick}
              >
                Back to Sign In
              </button>
            </div>
          </div>
        </div>
        <div style={{ flex: 0.5, display: "flex" }}>
          <img src={image} style={{ width: "832px" }} alt="Image" />
        </div>
      </div>
    );
  }
};

export default LoginForm;

