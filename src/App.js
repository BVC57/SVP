import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./Componets/Header";
import Login from "./Componets/Login";
import Sidebar from "./Componets/Sidebar";
import Signup from "./Componets/Signup";
import LogoutPage from "./Componets/Logoutpage";
import CertificatePage from './Componets/IsuueCertificate';
// import Signup1 from "./Componets/Signup1";
import Verify from  './Componets/Verify';
import UI from './Componets/UI';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    // Check if the user is logged in on component mount
    const userLoggedIn = localStorage.getItem("isLoggedIn");
    if (userLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    // Set logged in state and update local storage
    setLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  const handleLogout = () => {
    // Clear logged in state and local storage
    setLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };
  const fakeData = [
    { name: 'John Doe', phone: '123-456-7890', purpose: 'Meeting', date: '2024-03-26', view: 'Details' },
    { name: 'Jane Smith', phone: '987-654-3210', purpose: 'Presentation', date: '2024-03-27', view: 'Details' },
    { name: 'John Doe', phone: '123-456-7890', purpose: 'Meeting', date: '2024-03-26', view: 'Details' },
    { name: 'Jane Smith', phone: '987-654-3210', purpose: 'Presentation', date: '2024-03-27', view: 'Details' },
    { name: 'John Doe', phone: '123-456-7890', purpose: 'Meeting', date: '2024-03-26', view: 'Details' },
    { name: 'Jane Smith', phone: '987-654-3210', purpose: 'Presentation', date: '2024-03-27', view: 'Details' },
  ];

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <div className="dashbord">
            <Sidebar />
              <div className="header1">
                <Header />
              </div>
            <div className="maincontent">
              <Routes>
                {/* Your dashboard content */}
                <Route path="/issue/certificate" element={<CertificatePage/>} />
                <Route path="/logout" element={<LogoutPage onLogout={handleLogout} />} />
                <Route path="/verify" element={<Verify data={fakeData}/>} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/ui" element={<UI />} />
              </Routes>
            </div>
          </div>
        ) : (
          <Navigate to="/login" />
        )}
      </div>
    </Router>
  );
}

export default App;
