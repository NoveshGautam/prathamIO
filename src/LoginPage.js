import React, { useState } from "react";
import image from "./images/Frame.jpg.png";
import frame2image from "./images/frame2.jpg.png";

const LoginForm = () => {
  const [isSignInClicked, setIsSignInClicked] = useState(false);
  const [isSignUpClicked, setIsSignUpClicked] = useState(false);
  const [isForgotPasswordClicked, setIsForgotPasswordClicked] = useState(false);
  const [isMailSent, setIsMailSent] = useState(false);
  const [isBackToSignIn, setIsBackToSignIn] = useState(false);
  const [isResetPassword, setIsResetPassword] = useState(false);

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

  if (
    !isSignInClicked &&
    !isSignUpClicked &&
    !isForgotPasswordClicked &&
    !isMailSent &&
    !isBackToSignIn &&
    !isResetPassword
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
            flexDirection: "column",
          }}
        >
          <img
            src={frame2image}
            style={{ width: "428px", height: "40px" }}
            alt="Image"
          />

          <div
            style={{ width: "428px", height: "444px", position: "relative" }}
          >
            <div
              style={{
                width: "428px",
                height: "42px",
                position: "absolute",
                top: "20%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2
                style={{
                  //fontFamily: "Rubik",
                  fontWeight: "700",
                  fontSize: "34px",
                  color: " #093A5E",
                  lineHeight: "42px",
                }}
              >
                Hi, Welcome Back
              </h2>
            </div>
            <div
              style={{
                width: "428px",
                height: "44px",
                position: "absolute",
                top: "45%",
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
                  width: "428px",
                  height: "44px",
                  borderRadius: "4px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  weight: "500",
                }}
                onClick={handleSignInClick}
              >
                Sign In
              </button>
            </div>
            <div
              style={{
                position: "absolute",
                width: "428px",
                height: "70px",
                bottom: "0px",
                left: "50%",
                top: "70%",
                transform: "translateX(-50%)",
              }}
            >
              <div
                style={{
                  width: "428px",
                  height: "35px",
                  textAlign: "center",
                  color: "grey/500",
                  fontsize: "14px",
                  font: "Roboto",
                  weight: "500",
                }}
              >
                Don't have an account?
              </div>
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  width: "428px",
                  height: "35px",
                  textAlign: "center",
                  color: "#09548C",
                  font: "roboto",
                  fontSize: "16px",
                  fontweight: "500",
                }}
                onClick={handleSignUpClick}
              >
                Sign Up
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
              width: "508px",
              height: "680px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "428px",
                height: "600px",
                position: "relative",
              }}
            >
              <h2
                style={{
                  marginTop: "0px",
                  font: "Rubik",
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#093A5E",
                  width: "428px",
                  height: "30px",
                  textAlign: "center",
                }}
              >
                Sign In
              </h2>
              <p
                style={{
                  width: "428px",
                  height: "30px",
                  textAlign: "center",
                  color: "#9E9E9E",
                  fontSize: "16px",
                  fontweight: "400",
                }}
              >
                Enter your credentials to continue
              </p>

              <div
                style={{
                  width: "428px",
                  height: "290px",
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
                    width: "400px",
                    height: "30px",
                    padding: "16px",
                    marginBottom: "1px",
                    fontSize: "16px",
                    fontweight: "400",
                    borderRadius: "12px",
                    border: "0.5px solid #ccc",
                    background: "rgba(250,250,250,255)",
                  }}
                  placeholder="Email Address"
                />

                <input
                  type="password"
                  style={{
                    width: "400px",
                    height: "30px",
                    padding: "16px",
                    marginBottom: "3px",
                    fontSize: "16px",
                    fontweight: "400",
                    borderRadius: "12px",
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
                      font: "roboto",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    <input type="checkbox" />
                    Remember me
                  </label>
                  <div
                    style={{
                      color: "#2E1760",
                      textAlign: "center",
                      fontSize: "14px",
                      fontweight: "500",
                    }}
                    onClick={handleForgotPasswordClick}
                  >
                    Forgot Password?
                  </div>
                </div>
                <button
                  style={{
                    background: "#004679",
                    color: "#FFFFFF",
                    width: "428px",
                    height: "44px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    borderRadius: "5px",
                    marginBottom: "4px",
                  }}
                >
                  Sign In
                </button>
              </div>
              <div
                style={{
                  position: "absolute",
                  width: "428px",
                  height: "52px",
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div
                  style={{
                    width: "428px",
                    height: "20px",
                    textAlign: "center",
                    color: "Grey/500",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Don't have a account?
                </div>
                <div
                  style={{
                    cursor: "pointer",
                    width: "428px",
                    height: "20px",
                    textAlign: "center",
                    color: "#09548C",
                    fontSize: "16px",
                    fontWeight: "500",
                  }}
                  onClick={handleSignUpClick}
                >
                  Sign Up
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
              width: "508px",
              height: "661px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "428px",
                height: "581px",
                position: "relative",
              }}
            >
              <h2
                style={{
                  marginTop: "0px",
                  font: "Rubik",
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#093A5E",
                  width: "428px",
                  height: "32px",
                  textAlign: "center",
                }}
              >
                Sign Up
              </h2>
              <p
                style={{
                  width: "428px",
                  height: "24px",
                  textAlign: "center",
                  color: "Grey/500",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                Enter your credentials to continue
              </p>
              <div
                style={{
                  width: "428px",
                  height: "327px",
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
                      width: "170px",
                      height: "45px",
                      padding: "5px",
                      margintop: "0px",
                      marginRight: "60px",
                      font: "roboto",
                      fontweight: "500",
                      fontSize: "16px",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                      color: "Grey/500",
                    }}
                    placeholder="First Name"
                  />
                  <input
                    type="text"
                    style={{
                      width: "170px",
                      height: "45px",
                      padding: "5px",
                      marginBottom: "5px",
                      fontSize: "16px",
                      font: "roboto",
                      borderRadius: "10px",
                      border: "1px solid #ccc",
                      color: "Grey/500",
                      background: "rgba(250,250,250,255)",
                    }}
                    placeholder="Last Name"
                  />
                </div>
                <input
                  type="email"
                  style={{
                    width: "412px",
                    height: "45px",
                    padding: "5px",
                    marginBottom: "5px",
                    fontSize: "16px",
                    font: "roboto",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    color: "Grey/500",
                    background: "rgba(250,250,250,255)",
                  }}
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  style={{
                    width: "412px",
                    height: "45px",
                    padding: "5px",
                    marginBottom: "5px",
                    font: "roboto",
                    fontSize: "16px",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    color: "Grey/500",
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
                      font: "roboto",
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    <input type="checkbox" />
                    Remember me
                  </label>
                </div>
                <button
                  style={{
                    background: "#004679",
                    color: "#FFFFFF",
                    width: "428px",
                    height: "44px",
                    border: "none",
                    font: "roboto",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    borderRadius: "4px",
                    marginTop: "30px",
                  }}
                >
                  Sign up
                </button>
              </div>
              <div
                style={{
                  position: "absolute",
                  width: "428px",
                  height: "52px",
                  bottom: "0px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <div
                  style={{
                    width: "428px",
                    height: "20px",
                    textAlign: "center",
                    color: "Grey/500",
                    fontSize: "14px",
                    fontWeight: "500",
                    font: "roboto",
                  }}
                >
                  Already have an account?
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: "500",
                    font: "roboto",
                    cursor: "pointer",
                    width: "428px",
                    height: "20px",
                    textAlign: "center",
                    color: "#09548C",
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
              width: "428px",
              height: "466px",
              position: "relative",
              marginTop: "80px",
            }}
          >
            <h2
              style={{
                marginTop: "0px",
                font: "Rubik",
                fontWeight: "700",
                fontSize: "24px",
                color: "#093A5E",
                width: "428px",
                height: "32px",
                textAlign: "center",
              }}
            >
              Forgot Password?
            </h2>
            <p
              style={{
                width: "400px",
                height: "48px",
                textAlign: "center",
                color: "Grey/500",
                fontWeight: "400",
                fontSize: "16px",
                font: "Roboto",
                marginLeft: "13px",
              }}
            >
              Enter your Email address below and we will send you a password
              reset OTP.
            </p>
            <div
              style={{
                width: "428px",
                height: "158px",
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
                  width: "418px",
                  height: "58px",
                  padding: "5px",
                  marginBottom: "10px",
                  font: "roboto",
                  fontSize: "16px",
                  fontWeight: "500",
                  borderRadius: "10px",
                  border: "1px solid #ccc",
                  background: "rgba(250,250,250,255)",
                }}
                placeholder="Email Address"
              />

              <button
                style={{
                  background: "#004679",
                  color: "white",
                  width: "428px",
                  height: "50px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  borderRadius: "5px",
                  font: "roboto",
                  fontweight: "500",
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
                width: "428px",
                height: "52px",
                bottom: "40px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <div
                style={{
                  width: "428px",
                  height: "20px",
                  textAlign: "center",
                  color: "Grey/500",
                  fontSize: "14px",
                  font: "roboto",
                  fontweight: "500",
                }}
              >
                Already have an account?
              </div>
              <div
                style={{
                  textDecoration: "underline",
                  cursor: "pointer",
                  width: "428px",
                  height: "20px",
                  textAlign: "center",
                  color: "#09548C",
                  fontSize: "16px",
                  font: "roboto",
                  fontweight: "500",
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
              width: "381px",
              height: "195px",
              position: "relative",
              marginTop: "150px",
            }}
          >
            <h2
              style={{
                marginTop: "0px",
                font: "Rubik",
                fontWeight: "700",
                fontSize: "24px",
                color: "#093A5E",
                width: "381px",
                height: "39px",
                textAlign: "center",
              }}
            >
              Check Mail
            </h2>
            <p
              style={{
                width: "385px",
                height: "48px",
                textAlign: "center",
                color: "Grey/500",
                font: "Roboto",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              We have sent password recovery instructions to your email.
            </p>
            <div
              style={{
                width: "381px",
                height: "74px",
                position: "absolute",
                top: "85%",
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
                  color: "#FFFFFF",
                  width: "100%",
                  height: "50px",
                  border: "none",
                  cursor: "pointer",
                  font: "roboto",
                  fontWeight: "500",
                  fontSize: "14px",
                  borderRadius: "5px",
                  marginTop: "20px",
                }}
                onClick={handleBackToSignInClick}
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
  } else if (isBackToSignIn) {
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
          <div
            style={{
              position: "relative",
              width: "461px",
              height: "464px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "381px",
                height: "374px",
                position: "relative",
              }}
            >
              <h2
                style={{
                  marginTop: "0px",
                  font: "Rubik",
                  fontWeight: "700",
                  fontSize: "24px",
                  color: "#093A5E",
                  width: "380px",
                  height: "32px",
                  textAlign: "center",
                }}
              >
                Reset Password
              </h2>
              <p
                style={{
                  width: "380px",
                  height: "24px",
                  textAlign: "center",
                  color: "Grey/500",
                  fontSize: "16px",
                  fontWeight: "400",
                  font: "Roboto",
                }}
              >
                Please choose your new password
              </p>

              <div
                style={{
                  width: "381px",
                  height: "210px",
                  position: "absolute",
                  top: "60%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  //display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <input
                  type="Password"
                  style={{
                    width: "370px",
                    height: "48px",
                    padding: "5px",
                    marginBottom: "10px",
                    fontSize: "16px",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    background: "rgba(250,250,250,255)",
                    color: "Grey/500",
                    fontWeight: "500",
                    font: "Roboto",
                  }}
                  placeholder="New password"
                />

                <input
                  type="password"
                  style={{
                    width: "370px",
                    height: "48px",
                    padding: "5px",
                    marginBottom: "6px",
                    fontSize: "16px",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    background: "rgba(250,250,250,255)",
                    marginTop: "8px",
                    color: "Grey/500",
                    fontWeight: "500",
                    font: "Roboto",
                  }}
                  placeholder="confirm password"
                />

                <p
                  style={{
                    //display: "flex",
                    //alignItems: "center",
                    color: "red",
                    font: "roboto",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginTop: "2px",
                  }}
                >
                  Both password must me match!
                </p>

                <button
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
        <div style={{ flex: 0.5, display: "flex" }}>
          <img src={image} style={{ width: "832px" }} alt="Image" />
        </div>
      </div>
    );
  } else if (isResetPassword) {
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
          ></div>
          <div
            style={{
              width: "381px",
              height: "448px",
              position: "relative",
              marginTop: "80px",
            }}
          >
            <h2
              style={{
                marginTop: "0px",
                font: "Rubik",
                fontWeight: "700",
                fontSize: "24px",
                color: "#093A5E",
                width: "381px",
                height: "30px",
                textAlign: "center",
              }}
            >
              Enter Verification Code
            </h2>
            <p
              style={{
                width: "381px",
                height: "24px",
                textAlign: "center",
                color: "Grey/500",
                font: "Roboto",
                fontWeight: "400",
                fontSize: "16px",
              }}
            >
              We've send you on John****@gmail.com
            </p>
            <div
              style={{
                width: "381px",
                height: "140px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "381px",
                  height: "60px",
                  position: "absolute",
                  top: "0%",

                  //transform: "translate(-50%, -50%)",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <input
                  type="number"
                  style={{
                    width: "75px",
                    height: "48px",
                    padding: "2px, 16px, 2px, 16px",
                    marginBottom: "10px",
                    fontSize: "20px",
                    textAlign: "center",
                    borderRadius: "10px",
                    border: "none",
                    background: "rgba(250,250,250,255)",
                  }}
                  placeholder="0"
                />
                <input
                  type="number"
                  style={{
                    width: "75px",
                    height: "48px",
                    padding: "2px, 16px, 2px, 16px",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontSize: "20px",
                    textAlign: "center",
                    borderRadius: "10px",
                    border: "none",
                    background: "rgba(250,250,250,255)",
                  }}
                  placeholder="0"
                />
                <input
                  type="number"
                  style={{
                    width: "75px",
                    height: "48px",
                    padding: "2px, 16px, 2px, 16px",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    fontSize: "20px",
                    textAlign: "center",
                    borderRadius: "10px",
                    border: "none",
                    background: "rgba(250,250,250,255)",
                  }}
                  placeholder="0"
                />
                <input
                  type="number"
                  style={{
                    width: "75px",
                    height: "48px",
                    padding: "2px, 16px, 2px, 16px",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    textAlign: "center",
                    fontSize: "20px",
                    borderRadius: "10px",
                    border: "none",
                    background: "rgba(250,250,250,255)",
                  }}
                  placeholder="0"
                />
              </div>
              <div
                style={{
                  marginTop: "100px",
                }}
              >
                <button
                  style={{
                    background: "#004679",
                    color: "#FFFFFF",
                    width: "383px",
                    height: "44px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    font: "roboto",
                    fontweight: "500",
                    borderRadius: "4px",
                    marginTop: "20px",
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                width: "381px",
                height: "80px",
                bottom: "40px",
                top: "270px",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              <div
                style={{
                  width: "381px",
                  height: "20px",
                  textAlign: "center",
                  color: "Grey/600",
                  fontweight: "500",
                  font: "roboto",
                  fontsize: "14px",
                }}
              >
                Did not recieve the email? Check your spam filter, or
              </div>
              <button
                style={{
                  background: "white",
                  color: "#1D709F",
                  width: "381px",
                  height: "48px",
                  border: "3px solid #1D709F",
                  cursor: "pointer",
                  fontSize: "18px",
                  borderRadius: "5px",
                  marginTop: "16px",
                }}
              >
                Resend Code
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
