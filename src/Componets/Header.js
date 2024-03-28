import React from 'react';
import './Main.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import Belllogo from '../Images/bell.png';
import QueLogo from '../Images/question.png';
import {Button} from '@mui/material';

const Header = () => {
  const handleClick = () => {
    // sendOTP(); // Resend OTP when clicked
    alert("resend done");
  };
  return (
    <div>
    <header>
      <div className='cname'>
        <p>ABC Private Ltd 👋</p>
      </div>
      <div className='logoutsection'>
      <img src={QueLogo} alt='not found'></img>
      <img src={Belllogo} alt='not found'></img>
      {/* <FontAwesomeIcon icon={faSignOut} style={{ color: '#262C4C'}}  className='so'/>  */}
      {/* <a className="sup" href="/signup" onClick={handleClick}>
       
      </a> */}
      <Button  onClick={handleClick}>
        signout
      </Button>
      </div>
    </header>
    </div>
  )
}

export default Header;