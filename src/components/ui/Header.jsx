import { useState } from "react";
import { LOGO_CDN } from "../../config";
import BiteBoxLogo from '../../assets/BiteBox-LogoNew.png';
import '../../../src/index.css';
import '../ui/Header.css';
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src={BiteBoxLogo} />
  </a>
);

const Header = () => {
  // const [isLoggedIn, setisLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/About"><li>About</li></Link>
          <Link to="/Contact"><li>Contact</li></Link>
          {/* <Link to="/Cart"><li>Cart</li></Link> */}
        </ul>
      </div>
      {/* <button onClick={() => setisLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "LogIn"}
      </button> */}
      <Link to = "/Login"> <button>  Login   </button> </Link>
    </div>
  );
};

export default Header;
