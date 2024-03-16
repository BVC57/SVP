import React, { useState } from "react";
import "./Issue.css"; // Import your CSS file
import C1 from "../Images/apres.jpg";
import C2 from "../Images/eom.jpg";
import C3 from "../Images/exl.jpg";
import C4 from "../Images/intrn.png";
import C5 from "../Images/award.jpg";

function Progressbar() {
  const [currentStep, setCurrentStep] = useState(1);

  const showStep = (step) => {
    const formSteps = document.querySelectorAll(".form-step");
    formSteps.forEach((step) => {
      step.classList.remove("active");
    });
    document.getElementById(`step-${step}`).classList.add("active");

    const steps = document.querySelectorAll(".step");
    steps.forEach((step) => {
      step.classList.remove("completed");
    });
    for (let i = 1; i <= step; i++) {
      document.getElementById(`step-${i}-indicator`).classList.add("completed");
    }
    let progressBarWidth = (step - 1) * (100 / 3);
    document.querySelector(".progress-line").style.width =
      progressBarWidth + "%";
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
      showStep(currentStep + 1);
      document.querySelector(".progress-line").style.display = "block";
      if (currentStep === 3) {
        document.querySelector(".button.next").innerText = "Finish";
      }
    } else {
      // Handle final step action here
      // For now, just changing the content
      document.querySelector(".form-container").innerHTML = `
        <div style="text-align: center;">
          <h2>Congratulations!</h2>
          <p>You have successfully logged in.</p>
        </div>
      `;
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      showStep(currentStep - 1);
      document.querySelector(".progress-line").style.display = "block";
      document.querySelector(".button.next").innerText = "Next";
    }
  };

  return (
    <div className="form-container">
      <div className="step-indicator">
        <div
          className={`step ${currentStep >= 1 ? "completed" : ""}`}
          id="step-1-indicator">
          <span className="step-text">1</span>
        </div>
        <div
          className={`step ${currentStep >= 2 ? "completed" : ""}`}
          id="step-2-indicator">
          <span className="step-text">2</span>
        </div>
        <div
          className={`step ${currentStep >= 3 ? "completed" : ""}`}
          id="step-3-indicator">
          <span className="step-text">3</span>
        </div>
        <div className="progress-line" id="progress-line">
          <div className="progress-bar"></div>
        </div>
      </div>
      <div className="sih">
        <h3>Select Certificate</h3>
        <h4>Fill Details</h4>
        <h5>Issue</h5>
      </div>
      <form id="multi-step-form">
        {/* code for the select certificate */}
        <div
          className={`form-step ${currentStep === 1 ? "active" : ""}`}
          id="step-1">
          <div className="aci">
            <img src={C1} alt="not found" onClick={nextStep} />
            <img src={C2} alt="not found" onClick={nextStep} />
            <img src={C3} alt="not found" onClick={nextStep} />
            <img src={C4} alt="not found" onClick={nextStep} />
            <img src={C5} alt="not found" onClick={nextStep} />
          </div>
        </div>

        <div
          className={`form-step ${currentStep === 2 ? "active" : ""}`}
          id="step-2">
          <form>
            <div className="form_wrap">
              <div className="input_grp">
                <div className="input_wrap">
                  <label htmlFor="fname">User Id</label>
                  <input type="text" id="fname"  placeholder="Enter User ID"/>
                </div>
                <div className="input_wrap">
                  <label htmlFor="lname">Name</label>
                  <input type="text" id="lname" placeholder="Enter Your Name" />
                </div>
              </div>
              <div className="input_wrap">
                <label htmlFor="email">Email</label>
                <input type="text" id="email"  placeholder="Enter Your Email"/>
              </div>
              <div className="input_wrap">
                <label htmlFor="title">Title</label>
                <input type="text" id="title"  placeholder="Enter Title Name"/>
              </div>
              <div className="input_wrap">
                <label htmlFor="title">Select Issue Date</label>
                <input type="date" id="idate" />
              </div>
              
            </div>
          </form>
          {/* <div className="button-container">
            <button
              type="button"
              className="button previous"
              onClick={prevStep}>
              Previous
            </button>
            <button type="button" className="button next" onClick={nextStep}>
              Next
            </button>
          </div> */}
        </div>

        <div
          className={`form-step ${currentStep === 3 ? "active" : ""}`}
          id="step-3">
          <h2>Step 3</h2>
          {/* <div className="button-container">
            <button
              type="button"
              className="button previous"
              onClick={prevStep}>
              Previous
            </button>
            <button type="button" className="button next" onClick={nextStep}>
              Next
            </button>
          </div> */}
        </div>
      </form>
    </div>
  );
}

export default Progressbar;
