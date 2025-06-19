import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
function Navbar() {
    const [menu,setMenu]=useState("home");
    const {getTotalCartItems}=useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" height="50px" />
        <p>Shopify</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>setMenu("home")}><Link to="/"style={{'textDecoration':'none',color:'#626262'}}>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("mens")}><Link to="/mens"style={{'textDecoration':'none',color:'#626262'}}>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("womens")}><Link to="/womens"style={{'textDecoration':'none',color:'#626262'}}>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>setMenu("kids")}><Link to="/kids"style={{'textDecoration':'none',color:'#626262'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/Cart"><img src={cart_icon} alt=""height="40px" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
