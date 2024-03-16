import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Main.css';
import Verifylogo from '../Images/verify.png';
import Issuelogo from '../Images/Issuec.png';
import Guidlogo from '../Images/guid.png';
import Logo from '../Images/logo.png';
import ListLogo from '../Images/list.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const [showIssueOptions, setShowIssueOptions] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link, e) => {
    setActiveLink(link);
    if (link === '/issue') {
      setShowIssueOptions(!showIssueOptions);
    } else {
      setShowIssueOptions(false);
    }
  };

  return (
    <>
    <div className='sidebar'>
        <div className="slh">
          <img src={Logo} alt="not found" />
          <h1>Saksham</h1>
        </div>
      <div className="menu-items">
          <ul>
            <li className={activeLink === '/verify' ? 'active' : ''} ><Link to="/verify" onClick={() => handleLinkClick('/verify')}><img src={Verifylogo} alt='not found'></img><p>Verify</p></Link></li>
            <li className={activeLink === '/issue' ? 'active' : ''} >
              <Link to="/issue" onClick={(e) => handleLinkClick('/issue', e)}>
                <img src={Issuelogo} alt='not found'></img>
                <p>Issue</p>
              </Link>
              {showIssueOptions && (
                <ul className="sub-menu">
                  <li className={activeLink === '/issue/certificate' ? 'active' : ''}>
                    <Link to="/issue/certificate" onClick={(e) => e.stopPropagation()}>
                      <img src={ListLogo} alt='not found'></img>
                      <p>Certificate</p>
                    </Link>
                  </li>
                  <li className={activeLink === '/issue/document' ? 'active' : ''}>
                    <Link to="/issue/document" onClick={(e) => e.stopPropagation()}>
                      <img src={ListLogo} alt='not found'></img>
                      <p>Document</p>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className={activeLink === '/setting' ? 'active' : ''}>
              <Link to="/setting" onClick={() => handleLinkClick('/setting')}>
                <img src={ListLogo} alt='not found'></img>
                <p>Account Setting</p>
              </Link>
            </li>
            <li className={activeLink === '/guide' ? 'active' : ''}>
              <Link to="/guide" onClick={() => handleLinkClick('/guide')}>
                <img src={Guidlogo} alt='not found'></img>
                <p>Guide</p>
              </Link>
            </li>
          </ul>
      </div>
    </div>
    </>
    );
  };

export default Sidebar;
