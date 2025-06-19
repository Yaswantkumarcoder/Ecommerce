import React from "react";
import new_collections from "../assets/newcollections";
 import Item from "../Components/item/Item";
 import "./NewCollection.css";
const NewCollection = () => {
  return (
    <div className="newcollections">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => {
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
        })}
      </div>
    </div>
  );
};
export default NewCollection;
