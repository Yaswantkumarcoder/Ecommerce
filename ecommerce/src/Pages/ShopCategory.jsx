import React from "react";
import "../CSS/ShopCategory.css";
import { useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useContext } from "react";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../Components/item/Item";
const ShopCategory = (props) => {
   const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category"> 
      <img className="shopcategory-banner" src={props.banner} alt=""/>
      <div className="shopcategory-indexSort">
        <p>
          <span>showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by
          <img src="dropdwon_icon"alt="" height="20px"/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
};

export default ShopCategory;
