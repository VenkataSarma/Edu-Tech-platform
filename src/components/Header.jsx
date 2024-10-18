import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext"; // Import UserContext
import Usericon from "./Images/User-icon.png";
import Logo from "./Images/Logo.png";

function Header() {
  const { user } = useContext(UserContext); // Get user from context

  return (
    <header>
      <div className="navv">
        <nav>
          <div className="logo-image">
            <img src={Logo} className="img-fluid" alt="Company Logo" />
          </div>
          <div className="ancors">
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="head-btn">
            {user ? (
              <div className="user-info">
                <Link to="/Dashboard">
                  <img
                    src={Usericon} // You can replace with user's image if available
                    alt="User Icon"
                    className="user-icon"
                  />
                </Link>
                <h3>
                  <span>{user.firstname}</span>
                </h3>
              </div>
            ) : (
              <>
                <button className="nav-button">
                  <Link to="/Log" className="nav-link">
                    Login
                  </Link>
                </button>
                
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
