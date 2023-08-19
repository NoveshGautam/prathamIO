import React from "react";

const ButtonSection = () => {
  return (
    <div>
      {/* Sign In Button */}
      <div className="button-div">
     
        <button
          style={{
            background: "#004679",
            color: "white",
            width: "434px",
            height: "44px",
            borderradius: "4px",
            border: "none",
            cursor: "pointer",
            fontsize: "14px",
            fontweight: "500",
            marginTop : "50px"
          }}
        >
          Sign in
        </button>
        
      </div>
      {/* Sign Up Prompt */}
      <div className="last">
        <div
          className="last-2"
          style={{
            marginLeft: "180px",
            marginTop: "140px",
            width: "428px",
            height: "35px",
            marginleft: "0px",
            textalign: "center",
            color: "#09548c",
            font: "roboto",
            fontsize: "16px",
            fontweight: "500",
          }}
        >
          Sign Up
        </div>
       
      </div>
    </div>
  );
};

export default ButtonSection;
