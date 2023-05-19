
import { NavLink } from "react-router-dom"
import Logo from "../../assets/transparent-logo.png"
import LogoBlack from "../../assets/gift-arena-high-resolution-logo-black-on-transparent-background.png"

import "./navbar.css";
export const Navbar=()=>{
    const getStyle=({isActive})=>{
        return({
            color:isActive?"green":"white",
            textDecoration:"none"
        })
   


    }
    return(
        <>
        <div class="nav-header">
            <div class="nav-left">
            <div class="nav-logo">
              <img src={Logo} alt="gift arena" height="50px"></img>
            </div>
            <div class="nav-search">
                <input type="text" placeholder="search flowers, cakes, gifts etc..." ></input>
                
            </div>
            </div>
            <div class="nav-right">
            <div class="nav-items">
            <NavLink to="/" style={getStyle}>Home</NavLink>
            <NavLink to="/products" style={getStyle}>Products</NavLink>
            <NavLink to="/wishlist" style={getStyle}>Wishlist</NavLink>
            <NavLink to="/cart" style={getStyle}>Cart</NavLink>
           <button> <NavLink to="/login" style={getStyle}>Login</NavLink></button>
            {/* <NavLink to="/mockman">Mockman</NavLink> */}
            </div>
            </div>
       
        </div>
        </>
    )
}