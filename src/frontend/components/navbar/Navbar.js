import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../../assets/transparent-bg-logo.png";
// import LogoBlack from "../../assets/black-log.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import "./navbar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authenticationContext";
import { FilterContext } from "../../contexts/filterContext";
export const Navbar = () => {
  const { filterDispatch } = useContext(FilterContext);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const searchProductHandler = (searchText) => {
    filterDispatch({ type: "filter_by_search", payLoad: searchText });
    navigate("/products");
  };
  const getStyle = ({ isActive }) => {
    return {
      color: isActive ? "lightgreen" : "white",
      textDecoration: "none",
    };
  };

  const { loginHandler } = useContext(AuthContext);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  return (
    <>
      <div className="nav-main">
        <div className="nav-logo">
          <NavLink to="/">
            <img src={Logo} alt="gift arena"></img>
          </NavLink>
        </div>
        <div className="nav-search">
          <input
            type="text"
            placeholder="search flowers, cakes, gifts etc..."
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button onClick={() => searchProductHandler(searchText)}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        <div className="nav-links">
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
            <FontAwesomeIcon icon={faUser} />
          </NavLink>
          {/* <NavLink to="/mockman">Mockman</NavLink> */}
        </div>
        <div
          className="hamburger-icon"
          onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
        >
          {showHamburgerMenu ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
      </div>
      {showHamburgerMenu && (
        <div className="hamburger-menu">
          <div className="hamburger-menu-links">
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
              <FontAwesomeIcon icon={faUser} />
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};
