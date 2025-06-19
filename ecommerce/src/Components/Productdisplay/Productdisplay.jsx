import React, { useContext } from "react";
import "./Productdisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const Productdisplay = (props) => {
  const { product } = props;
  const {addToCart}=useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" height="200px" />
          <img src={product.image} alt="" height="200px" />
          <img src={product.image} alt="" height="200px" />
        </div>
        <div className="productdislay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt=""
            height="500px"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt=""height="20px"/>
          <img src={star_icon} alt=""height="20px"/>
          <img src={star_icon} alt=""height="20px"/>
          <img src={star_icon} alt=""height="20px"/>
          <img src={star_dull_icon} alt=""height="20px"/>
          <p>{130}</p>
        </div>
        <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
                   ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
                     ${product.new_price}
            </div>
            </div>
            <div className="productdisplay-right-description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam dolores maiores repellat consectetur eligendi assumenda eum harum ipsum sequi tempore quaerat aspernatur fugit dignissimos ut soluta, voluptatum voluptatibus ea! Dignissimos!
            </div>
            <div className="productdisplay-right-size">
                   <h1>Select size</h1>
                   <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                   </div>
            </div>
               <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
               <div className="productdisplay-right-category">
                  <span>Category:<span>Women,T-shirt,Crop Top</span></span>
               </div>
             <div className="productdisplay-right-category">
                  <span>Tags:<span>Women,Latest,Trend Shorts</span></span>
               </div>
        </div>
      </div>
  );
};

export default Productdisplay;
