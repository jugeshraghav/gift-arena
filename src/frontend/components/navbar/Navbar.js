import { NavLink } from "react-router-dom";
import Logo from "../../assets/transparent-bg-logo.png";
// import LogoBlack from "../../assets/black-log.png"

import "./navbar.css";
import { useContext } from "react";
import { AuthContext } from "../../contexts/authenticationContext";
export const Navbar = () => {
  const getStyle = ({ isActive }) => {
    return {
      color: isActive ? "lightgreen" : "white",
      textDecoration: "none",
    };
  };

  const { loginHandler } = useContext(AuthContext);
  const encodedUserLoginToken = localStorage.getItem("encodedUserLoginToken");
  return (
    <>
      <div className="nav-header">
        <div className="nav-left">
          <div className="nav-logo">
            <img src={Logo} alt="gift arena" height="50px"></img>
          </div>
          <div className="nav-search">
            <input
              type="text"
              placeholder="search flowers, cakes, gifts etc..."
            ></input>
          </div>
        </div>
        <div className="nav-right">
          <div className="nav-items">
            <NavLink to="/" style={getStyle}>
              Home
            </NavLink>
            <NavLink to="/products" style={getStyle}>
              Products
            </NavLink>
            <NavLink to="/wishlist" style={getStyle}>
              Wishlist
            </NavLink>
            <NavLink to="/cart" style={getStyle}>
              Cart
            </NavLink>
            <NavLink to="/login" style={getStyle}>
              <button>Login</button>
            </NavLink>
            {/* <NavLink to="/mockman">Mockman</NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
};
