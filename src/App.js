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

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <div className="dashbord">
            <Sidebar />
            <div className="maincontent">
              <div className="header1">
                <Header />
              </div>
              <Routes>
                {/* Your dashboard content */}
                <Route path="/issue/certificate" element={<CertificatePage/>} />
                <Route path="/logout" element={<LogoutPage onLogout={handleLogout} />} />
              </Routes>
            </div>
          </div>
        ) : (
          <Navigate to="/login" />
        )}

        <Routes>
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
