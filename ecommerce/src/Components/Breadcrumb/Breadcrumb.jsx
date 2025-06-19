import React from "react";
import "./Breadcrumb.css";
import arrow_icon from "../../assets/arrow_icon.png";
const Breadcrumb = (props) => {
     const {product}=props;
  return <div className="breadcrumb">
     Home <img src={arrow_icon} alt=""height="10px"/> SHOP <img src={arrow_icon} alt=""height="10px"/> {product.category} <img src={arrow_icon} alt=""height="10px"/> {product.name} 
  </div>
};
export default Breadcrumb;
