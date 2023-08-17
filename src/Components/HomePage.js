import React from "react";
import frame2image from "../images/frame2.png";
import frame3image from "../images/frame3.png";
import Call from "../images/Call.png";
import company from "../images/company.png";
import student from "../images/student.png";
import test from "../images/test.png";
import teachers from "../images/teachers.png";
import analysis from "../images/analysis.png";
import admission from "../images/admission.png";
import arrow from "../images/arrow.png";
import admision from "../images/admision.png";
import settings from "../images/settings.png";
import portal from "../images/portal.png";
import assessment from "../images/assessment.png";
import center from "../images/center.png";
import Home from "../images/Home.png";
import "../App.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="home-page-header">
        <div className="header-img">
          <img src={frame2image} alt="Image" />
        </div>
        <div className="header-identity">
          <div className="identity-image">
            <img src={frame3image} alt="Image" />
          </div>
          <div className="identity-div">
            <div className="identity-name">John Doe</div>
            <div className="identity-post">School Manager</div>
          </div>
        </div>
      </header>
      <div className="home-page-container1">
        <div className="navigations-div">
          <div className="home-navigation">
            <img src={Home} alt="Image" />
            <div className="navigation-home-font">Home</div>
          </div>
          <div className="test-center-navigation">
            <img src={center} alt="Image" />
            <div className="navigation-font">Tests center</div>
          </div>
          <div className="student-portal-navigation">
            <img src={portal} alt="Image" />
            <div className="navigation-font">Student portal</div>
          </div>
          <div className="analysis-navigation">
            <img src={assessment} alt="Image" />
            <div className="navigation-font">Analysis</div>
          </div>
          <div className="admission-navigation">
            <img src={admision} alt="Image" />
            <div className="navigation-font">Admission</div>
          </div>
          <div className="settings-navigation">
            <img src={settings} alt="Image" />
            <div className="navigation-font">Settings</div>
          </div>
        </div>
      </div>
      <div className="home-page-container2">
        <div className="sub-container2">
          <div className="mini-sub-container2">
            <div className="mini-1">Welcome back,</div>
            <div className="mini-2">
              <div className="school-name">
                Ryan International School, Rohini
              </div>
              <div className="school-id">School ID: 345677</div>
            </div>
            <div className="mini-3">
              <div className="school-address">
                {" "}
                <img src={company} alt="Image" />
                22 Clarington Street, Haryana, UP 201090
              </div>
              <div className="school-phone">
                {" "}
                <img src={Call} alt="Image" />
                +91-8888-888-888
              </div>
            </div>
          </div>
          <div className="About-school">
            <div className="About-school-div-1">
              <div className="test-center">
                <div className="mini-div-test">
                  <img src={test} alt="Image" />
                  <div className="about-font">Test Center</div>
                </div>
              </div>
              <div className="student-portal">
                <div className="mini-div-portal">
                  <img src={student} alt="Image" />
                  <div className="about-font">Student Portal</div>
                </div>
              </div>
              <div className="teachers">
                <div className="mini-div-teachers">
                  <img src={teachers} alt="Image" />
                  <div className="about-font">Teachers</div>
                </div>
              </div>
            </div>
            <div className="about-school-div-2">
              <div className="analysis">
                <div className="mini-div-analysis">
                  <img src={analysis} alt="Image" />
                  <div className="about-font">Analysis</div>
                </div>
              </div>
              <div className="admission">
                <div className="mini-div-admission">
                  <img src={admission} alt="Image" />
                  <div className="about-font">Admission</div>
                </div>
              </div>
              <div className="quick-link">
                <div className="mini-div-quick-link">
                  <div className="quick-link-heading">Quick Links</div>
                  <div className="create-test-div">
                    <div className="more-about">Create Test</div>
                    <div className="arrow">
                      {" "}
                      <img src={arrow} alt="Image" />
                    </div>
                  </div>
                  <div className="add-students-div">
                    <div className="more-about"> Add Students</div>
                    <div className="arrow">
                      <img src={arrow} alt="Image" />
                    </div>
                  </div>
                  <div className="add-question-div">
                    <div className="more-about"> Add Question</div>
                    <div className="arrow">
                      <img src={arrow} alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
