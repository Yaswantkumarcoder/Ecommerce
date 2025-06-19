import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offfers/Offers";
import NewCollection from "../NewCollections/NewCollection";
import NewsLetter from "../Components/NewsLettter/NewsLetter";
import Footer from "../Components/Footer/Footer";
function Shop(props) {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLetter />
    </div>
  );
}

export default Shop;
