import { useState } from "react";
import AstraaLogo from "../assets/logos/Harry_logo.png";
import Logo1 from "../assets/logos/logo1.png";
import Logo2 from "../assets/logos/logo2.png";
import Logo3 from "../assets/logos/logo3.png";
import Logo4 from "../assets/logos/logo4.png";
import Logo5 from "../assets/logos/logo5.png";
import Logo6 from "../assets/logos/logo6.png";
import "./../styles/Header.css"; 

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    setOpenNavigation(!openNavigation);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Astraa Logo on Left */}
        <a href="#hero" className="logo">
          <img src={AstraaLogo} alt="Code Astraa" />
        </a>

        {/* Logos Section - Hidden on Mobile */}
        <div className="logo-container">
          <img src={Logo1} alt="Logo 1" className="magic-logo" />
          <img src={Logo2} alt="Logo 2" className="magic-logo" />
          <img src={Logo3} alt="Logo 3" className="magic-logo" />
          <img src={Logo4} alt="Logo 4" className="magic-logo" />
          <img src={Logo5} alt="Logo 5" className="magic-logo" />
          <img src={Logo6} alt="Logo 6" className="magic-logo" />
        </div>

        {/* Hamburger Menu - Only for Mobile */}
        <button className="hamburger" onClick={toggleNavigation}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Logo Menu */}
      <div className={`mobile-logo-menu ${openNavigation ? "open" : ""}`}>
        <img src={Logo1} alt="Logo 1" />
        <img src={Logo2} alt="Logo 2" />
        <img src={Logo3} alt="Logo 3" />
        <img src={Logo4} alt="Logo 4" />
        <img src={Logo5} alt="Logo 5" />
        <img src={Logo6} alt="Logo 6" />
      </div>
    </header>
  );
};

export default Header;
