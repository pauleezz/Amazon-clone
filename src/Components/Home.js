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
      <div className="home__row">
        <Product
          id="1002634"
          title="Marshall Kilburn II Portable Bluetooth Speaker - Black (1002634)"
          price={299.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/91ytEI3VWWL._AC_SL1500_.jpg"
        />
        <Product
          id="1002634"
          title="Ripple Junction Rick & Morty Eyes Open Adult T-Shirt"
          price={19.95}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/615UOznDLEL._AC_UL1230_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1002634"
          title="This is fine on fire meme Vinyl Sticker"
          price={4.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/41i2j26C6PL.jpg"
        />
        <Product
          id="1002634"
          title="WIZARDPINS State Shape of California and California Flag Lapel Pin"
          price={8.61}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51F4YaeFZqL._AC_UY695_.jpg"
        />
        <Product
          id="1002634"
          title="DualShock 4 Wireless Controller for PlayStation 4 - Midnight Blue"
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81wx5gvczgL._SL1500_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1002634"
          title="Apple iPad Pro (11-inch, Wi-Fi, 128GB) - Silver (2nd Generation)"
          price={799.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81lqq8UF5ML._AC_SL1500_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
