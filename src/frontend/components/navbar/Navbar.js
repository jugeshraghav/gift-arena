import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ImGift } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineExplore } from "react-icons/md";

import { FilterContext } from "../../contexts/filterContext";
import "./navbar.css";
export const Navbar = () => {
  const { filterDispatch } = useContext(FilterContext);
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const searchProductHandler = (searchText) => {
    filterDispatch({ type: "filter_by_search", payLoad: searchText });
    navigate("/products");
  };
  const getStyle = () => {
    return {
      textDecoration: "none",
    };
  };

  const token = localStorage.getItem("token");

  return (
    <>
      <div className="nav-main">
        <div className="nav-primary">
          <NavLink to="/" style={getStyle}>
            <div className="nav-logo-container">
              <span className="nav-logo-img">
                <ImGift />
              </span>
              <span className="nav-logo">Gift Arena</span>
            </div>
          </NavLink>

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
              <MdOutlineExplore className="nav-link" />
            </NavLink>
            <NavLink to="/wishlist" style={getStyle}>
              <AiOutlineHeart className="nav-link" />
            </NavLink>
            <NavLink to="/cart" style={getStyle}>
              <AiOutlineShoppingCart className="nav-link" />
            </NavLink>
            <NavLink to={token ? "/profile" : "login"} style={getStyle}>
              <AiOutlineUser className="nav-link" />
            </NavLink>
            {/* <NavLink to="/mockman">Mockman</NavLink> */}
          </div>
        </div>
      </div>
    </>
  );
};
