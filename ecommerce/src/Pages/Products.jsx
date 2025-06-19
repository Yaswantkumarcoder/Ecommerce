import React from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrumb from '../Components/Breadcrumb/Breadcrumb';
import { useContext } from 'react';
import Productdisplay from '../Components/Productdisplay/Productdisplay';
 import Description from '../Components/Description/Description';
import Relatedproduct from '../Components/RelatedProduct/Relatedproduct';
  const Products = () => {
     const {all_product}=useContext(ShopContext);
     const {productId}=useParams();
     const product=all_product.find((e)=>e.id===Number(productId));
    return (
        <div>
           <Breadcrumb product={product}/>
           <Productdisplay product={product}/>
           <Description/>
           <Relatedproduct/>
        </div>
    );
};

export default Products;