import React, { Component } from "react";
import "../Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"
      ></img>
      <Product
        id="1002634"
        title="Marshall Kilburn II Portable Bluetooth Speaker - Black (1002634)"
        price={299.99}
        rating={5}
        image="https://images-na.ssl-images-amazon.com/images/I/91ytEI3VWWL._AC_SL1500_.jpg"
      />
    </div>
  );
}

export default Home;
