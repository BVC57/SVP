// FakeDataEntryTable.js

import React, { useState, useEffect } from "react";
import Select from "react-select";
import { FaSearch } from 'react-icons/fa';
import "./Verify.css";

const IssueTable = ({ data }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [otpValues, setOtpValues] = useState(Array(6).fill(""));

  const togglePopup = () => {
    setOpenPopup(!openPopup);
  };

  useEffect(() => {
    document.addEventListener("paste", handlePaste);

    return () => {
      document.removeEventListener("paste", handlePaste);
    };
  }, [otpValues]);

  const handlePaste = (event) => {
    event.preventDefault();
    const pastedData = event.clipboardData.getData("Text");
    const pastedValues = pastedData.match(/\d/g); // Extract only digits
    if (pastedValues && pastedValues.length <= 6) {
      const updatedValues = [...otpValues];
      pastedValues.forEach((value, index) => {
        updatedValues[index] = value;
      });
      setOtpValues(updatedValues);
    }
  };

  const handleChange = (index, event) => {
    const { value } = event.target;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const updatedValues = [...otpValues];
      updatedValues[index] = value;
      setOtpValues(updatedValues);
      if (value !== "") {
        const nextIndex = index + 1;
        if (nextIndex < otpValues.length) {
          const nextInput = document.getElementById(`otpInput${nextIndex + 1}`);
          if (nextInput) {
            nextInput.focus();
          }
        }
      }
    }
  };

  const handleBackspace = (index, event) => {
    if (event.key === "Backspace") {
      const updatedValues = [...otpValues];
      updatedValues[index] = "";
      if (updatedValues[index] === "" && index > 0) {
        updatedValues[index] = "";
      }
      setOtpValues(updatedValues);
      const prevIndex = index > 0 ? index - 1 : 0;
      const prevInput = document.getElementById(`otpInput${prevIndex + 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const options = [
    { value: "Offer Latter", label: "All" },
    { value: "Reward", label: "Reward" },
    { value: "Exit Latter", label: "Exit Letter" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange1 = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log("Category:", selectedOption.value);
  };

  const customStyles = {
    // Example styles, you can customize them according to your needs
    control: (provided, state) => ({
      ...provided,
      border: "1px solid silver",
      width: "400px",
      height: "30px",
      boxShadow: state.isFocused ? "none" : "none",
      paddingBottom: "30px", // Add padding bottom
    }),
    menu: (provided) => ({
      ...provided,
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    }),
    option: (provided, state) => ({
      ...provided,
      //   borderbottom: '1px solid #ccc', // Add a border to each option
      color: state.isSelected ? "#2684FF" : "black", // Change text color when selected
      background: state.isFocused ? "#ccc" : "white", // Change background color when focused
      "&:hover": {
        // Add styles for hover state
        background: "#ccc", // Change background color on hover
      },
      "&:focus": {
        // Add styles for hover state
        background: "#ccc", // Change background color on hover
      },
    }),
    indicatorSeparator: () => ({}), // Remove the default indicator separator
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transition: "transform 0.3s", // Add a transition for a smooth rotation effect
      transform: state.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)", // Rotate the arrow based on menu state
    }),
  };
  return (
    <div className="tablemain">
      <div className="tophead">
        <h3>Credentials</h3>
        <button onClick={togglePopup}>Verify New Credential</button>
        <div className="search__container">
          <span className="search__icon">
            <FaSearch />
          </span>
          <input className="search__input" type="text" placeholder="Search" />
        </div>
      </div>
      <div className="data-entry-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone No</th>
              <th>Purpose</th>
              <th>Date</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.phone}</td>
                <td>{entry.purpose}</td>
                <td>{entry.date}</td>
                <td>{entry.view}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-inner">
              <div className="verification-page">
                <h1>Verify New Credentials</h1>

                <div className="form_wrap">
                  <div className="input_grp">
                    <div className="input_wrap">
                      <label htmlFor="fname">Phone Number</label>
                      <div class="phone-input">
                        <select class="country-code">
                          <option value="+1">+1(USA)</option>
                          <option value="+44">+44(UK)</option>
                          <option value="+91">+91(IN)</option>
                        </select>
                        <input
                          type="text"
                          class="phone-number"
                          maxLength={11}
                          placeholder="+0000000000"
                        />
                      </div>
                      <button className="gotp">Get OTP</button>
                    </div>
                    <div className="input-field">
                      {otpValues.map((value, index) => (
                        <input
                          key={index}
                          type="number"
                          id={`otpInput${index + 1}`}
                          value={value}
                          onChange={(e) => handleChange(index, e)}
                          onKeyDown={(e) => handleBackspace(index, e)}
                          maxLength={1}
                        />
                      ))}
                      <button className="votp">Verify OTP</button>
                      <a className="rotp" href="/">
                        Resend OTP
                      </a>
                      <br></br>
                      <div className="slist">
                        <label htmlFor="fname" className="pl">
                          Purpose
                        </label>
                        <Select
                          options={options}
                          value={selectedOption}
                          onChange={handleChange1}
                          styles={customStyles}
                          placeholder="All"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-section">
                  <button onClick={togglePopup} className="cbtn">
                    Cancel
                  </button>
                  <button className="sbtn">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IssueTable;
