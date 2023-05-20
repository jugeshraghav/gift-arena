import { NavLink } from "react-router-dom";
import Logo from "../../assets/transparent-bg-logo.png";
// import LogoBlack from "../../assets/black-log.png"

import "./navbar.css";
export const Navbar = () => {
  const getStyle = ({ isActive }) => {
    return {
      color: isActive ? "lightgreen" : "white",
      textDecoration: "none",
    };
  };
  return (
    <>
      <div class="nav-header">
        <div class="nav-left">
          <div class="nav-logo">
            <img src={Logo} alt="gift arena" height="50px"></img>
          </div>
          <div class="nav-search">
            <input
              type="text"
              placeholder="search flowers, cakes, gifts etc..."
            ></input>
          </div>
        </div>
        <div class="nav-right">
          <div class="nav-items">
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
