// import React from "react";
// import image from "../images/Frame.png";
// import { Link } from "react-router-dom";
// import "../App.css";

// /**
//  * Represents the Verification page component.
//  * Allows users to enter a verification code sent to their email.
//  */
// const Verification = () => {
//   return (
//     <div className="main-container">
//       {/* Left Container */}
//       <div className="left-container">
//         <div className="verification-page">
//           {/* Heading */}
//           <h2 className="heading-verification">Enter Verification Code</h2>
//           {/* Sub-heading */}
//           <p className="sub-heading-verification">
//             We've sent you on John****@gmail.com
//           </p>
//           {/* Verification Code Input */}
//           <div className="code-container">
//             <div className="input-boxes">
//               <input className="input-box1" type="number" placeholder="0" />
//               <input className="input-box2" type="number" placeholder="0" />
//               <input className="input-box3" type="number" placeholder="0" />
//               <input className="input-box4" type="number" placeholder="0" />
//             </div>
//             {/* Continue Button */}
//             <div className="continue-button-container">
//               <Link to="/HomePage">
//                 <button className="continue-button"> Continue</button>
//               </Link>
//             </div>
//           </div>
//           {/* Resend Code Option */}
//           <div className="last-div-verification">
//             <div className="last-1-verif">
//               Did not receive the email? Check your spam filter, or
//             </div>
//             <button className="resend-button">Resend Code</button>
//           </div>
//         </div>
//       </div>
//       {/* Right Container */}
//       <div className="right-div">
//         <img src={image} alt="Image" />
//       </div>
//     </div>
//   );
// };

// export default Verification;
