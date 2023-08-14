
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DefaultView from "./Components/DefaultView";  
import SignIn from "./Components/SignIn";            
import SignUp from "./Components/SignUp";           
import ForgotPassword from "./Components/ForgotPassword";
import MailSent from "./Components/MailSent";       
import ResetPassword from "./Components/ResetPassword"; 
import Verification from "./Components/Verification";  

const App = () => {
  
  return (
    
    <Router>
      <div className="App">
      <ul className="App-header">
            <li>
                <Link to="/">DefaultView</Link>
            </li>
            <li>
                <Link to="/SignIn">SignIn</Link>
            </li>
            <li>
                <Link to="/SignUp">SignUp</Link>
            </li>
            <li>
                <Link to="/ForgotPassword">ForgotPassword</Link>
            </li>
            <li>
                <Link to="/MailSent">MailSent</Link>
            </li>
            </ul>
    
            <Route path="/" exact component={DefaultView} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgotpassword" component={ForgotPassword} />
        <Route path="/mailsent" component={MailSent} />
        <Route path="/resetpassword" component={ResetPassword} />
        <Route path="/verification" component={Verification} />
    
    
       
      
      </div>
    </Router>
  );
};

export default App;
