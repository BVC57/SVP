import React from 'react'
import { useCallback } from "react";
import {
TextField,
InputAdornment,
Icon,
IconButton,
Button,
} from "@mui/material";
import "./Signup1.css";

const Signup1 = () => {

  return (
    <div>
    <form className="frame-group">
      <div className="pan-field-wrapper">
        <div className="pan-field">
          <div className="address-field-parent">
            <div className="address-field">
              <img
                className="address-field-child"
                loading="lazy"
                alt=""
                src="/group-427318468.svg"
              />
              <h1 className="saksham">Saksham</h1>
            </div>
            <div className="log-in-parent">
              <div className="log-in">{`Log in `}</div>
              <div className="welcome-back-please">
                Welcome back! Please enter your details.
              </div>
            </div>
          </div>
          <h2 className="sign-up">Sign Up</h2>
        </div>
      </div>
      <div className="frame-container">
        <div className="pan-parent">
          <div className="pan">PAN</div>
          <TextField
            className="business-address-field"
            placeholder="Enter pan number"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#d0d5dd" },
              "& .MuiInputBase-root": {
                height: "44px",
                backgroundColor: "#fff",
                borderRadius: "8px",
              },
              "& .MuiInputBase-input": { color: "#667085" },
            }}
          />
        </div>
        <div className="business-name-brain-box-netwo-wrapper">
          <div className="business-name-brain-container">
            <p className="business-name-brain-box">
              Business Name: BRAIN BOX NETWORK
            </p>
            <p className="address-xxxxxxxx-xxxxxxx">
              Address: xxxxxxxx xxxxxxx xxxxx
            </p>
            <p className="pincode-xxxxx">Pincode: xxxxx</p>
            <p className="entity-type-partnership">Entity Type: Partnership</p>
            <p className="registration-type-regular">
              Registration Type: Regular
            </p>
          </div>
        </div>
      </div>
      <div className="resend-button">
        <div className="contact-person">Contact Person</div>
        <TextField
          className="cancel-button"
          placeholder="Contact Person"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#d0d5dd" },
            "& .MuiInputBase-root": {
              height: "44px",
              backgroundColor: "#fff",
              borderRadius: "8px",
            },
            "& .MuiInputBase-input": { color: "#667085" },
          }}
        />
      </div>
      <div className="frame-div">
        <div className="phone-number-parent">
          <div className="phone-number">Phone number</div>
          <div className="frame-wrapper">
            <div className="frame-parent1">
              <div className="in-parent">
                <div className="in">IN</div>
                <input className="comment-2" type="checkbox" />
              </div>
              <div className="div">+1 (555) 000-0000</div>
            </div>
          </div>
        </div>
        <div className="frame-wrapper1">
          <div className="get-otp-wrapper">
            <div className="get-otp">Get OTP</div>
          </div>
        </div>
      </div>
      <div className="input-field-container">
        <div className="contact-email-parent">
          <div className="contact-email">Contact Email</div>
          <div className="contact-email-group">
            <div className="contact-email1">Contact Email</div>
            <input
              className="resend-o-t-p-button"
              placeholder="Get OTP"
              type="text"
            />
          </div>
        </div>
        <div className="sign-up-link">
          <div className="frame-parent2">
            <div className="frame-parent3">
              <div className="rectangle-wrapper">
                <div className="frame-item" />
              </div>
              <div className="rectangle-container">
                <div className="frame-inner" />
              </div>
              <div className="rectangle-frame">
                <div className="rectangle-div" />
              </div>
              <div className="group-div">
                <div className="frame-child1" />
              </div>
              <div className="rectangle-wrapper1">
                <div className="frame-child2" />
              </div>
              <div className="rectangle-wrapper2">
                <div className="frame-child3" />
              </div>
            </div>
            <Button
              className="frame-button"
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                background: "#0075f3",
                borderRadius: "6px",
                "&:hover": { background: "#0075f3" },
                width: 160,
                height: 43,
              }}
            >
              Verify OTP
            </Button>
          </div>
          <div className="resend-otp">Resend OTP</div>
        </div>
      </div>
      <div className="frame-parent4">
        <div className="form-wrapper-parent">
          <input className="form-wrapper" type="checkbox" />
          <div className="i-agree">I Agree</div>
        </div>
        <div className="frame-parent5">
          <Button
            className="frame-child4"
            disableElevation={true}
            variant="outlined"
            sx={{
              textTransform: "none",
              color: "#0075f3",
              fontSize: "16",
              borderColor: "#0075f3",
              borderRadius: "6px",
              "&:hover": { borderColor: "#0075f3" },
              height: 43,
            }}
          >
            Cancel
          </Button>
          <Button
            className="frame-child5"
            disableElevation={true}
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#0075f3",
              borderRadius: "6px",
              "&:hover": { background: "#0075f3" },
              height: 43,
            }}
          >
            Submit
          </Button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default Signup1