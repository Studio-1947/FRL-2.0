import "./NavBar.css";
import { useState } from "react";
import Links from "./Links";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="nav-div">
        <nav>
          <img src="./assets/logo.png" alt="Logo" />
          
          {/* Desktop Links */}
          <div className={`links ${isOpen ? 'active' : ''}`}>
            <Links name="RESOURCES" />
            <Links name="PEOPLE" />
            <Links name="ABOUT US" />
            <Links name="IMPACT" />
            <Links name="KNOWLEDGE SYSTEM" />
          </div>
          
          {/* Desktop Icon */}
          <div className={`icon ${isOpen ? 'active' : ''}`}>
            <img src="./assets/user.png" id="userIcon" alt="User" />
            <Links name="Login" />
          </div>
          
          {/* Hamburger Button */}
          <div className="ham" onClick={toggleMenu}>
            <div className={`hamburger ${isOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
        
        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="mobile-menu-overlay" onClick={toggleMenu}>
            <div className="mobile-menu">
              <Links name="RESOURCES" />
              <Links name="PEOPLE" />
              <Links name="ABOUT US" />
              <Links name="IMPACT" />
              <Links name="KNOWLEDGE SYSTEM" />
              <div className="mobile-icon">
                <img src="./assets/user.png" id="userIcon" alt="User" />
                <Links name="Login" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default NavBar;
