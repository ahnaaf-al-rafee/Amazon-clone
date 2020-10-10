import React from "react";

import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12345"
          title="Dear Child: A Novel"
          price={13.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51tXqR-8uVL.jpg"
        />
        <Product
          id="15345"
          title="AmazonBasics Slim Carry On Travel Backpack"
          price={67.68}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/A1ZeOgF89nL._AC_UY550_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12349"
          title="Apple iPhone 11 Pro Max (64GB, Midnight Green) [Locked] + Carrier Subscription"
          price={699.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81j2j9x-KWL.jpg"
        />
        <Product
          id="12347"
          title="Apple AirPods with Wireless Charging Case"
          price={142.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/710rzW2RGcL._AC_SX522_.jpg"
        />
        <Product
          id="12645"
          title="4TH Emotion Happy Fall Pumpkin Halloween Throw Pillow Cover Farmhouse Autumn Cushion Case for Sofa Couch 18x18 Inches Cotton Linen"
          price={10.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61dxtsgFM4L._AC_SX679_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12355"
          title="Apple iMac (21.5-inch, 8GB RAM, 1TB Storage) - Silver (Previous Model)"
          price={1099.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/51WqYDg2pSL._AC_UY218_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
