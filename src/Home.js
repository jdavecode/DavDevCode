import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home-banner">
        <Banner image="imgs/banner-1.jpg" />
      </div>

      <div className="home-row">
        <Product
          id={0}
          title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen ..."
          price={164.99}
          shapping="+ $27.35 Shipping & Import Fees Fees Deposit "
          rating={5}
          image="imgs/hp-computer.jpg"
          sell="best seller"
        />

        <Product
          id={1}
          title="Roku Express | HD Streaming Media Player with High Speed ..."
          price={28.88}
          shapping="+ $27.35 Shipping & Import Fees Deposit"
          rating={5}
          image="imgs/phone-2.jpg"
          sell="best seller"
        />

        <Product
          id={2}
          title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen ..."
          price={364.99}
          shapping="+ $27.35 Shipping & Import Fees Deposit"
          rating={5}
          image="imgs/hp-laptop.jpg"
          sell="best seller"
        />

        <Product
          id={4}
          title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)  "
          price={56.399}
          shapping="+ $27.35 Shipping & Import Fees Deposit"
          rating={5}
          image="imgs/a-product-1.jpg"
          sell="best seller"
        />
        <Product
          id={5}
          title="HP OfficeJet Pro 8025 All-in-One Wireless Printer, Smart Home Office Productivity ..."
          price={131.96}
          shapping="+ $27.35 Shipping & Import Fees Deposit"
          rating={5}
          image="imgs/a-product-2.jpg"
          sell="best seller"
        />
        <Product
          id={6}
          title="Ailun Glass Screen Protector Compatible for iPhone 11/iPhone XR ..."
          price={6.98}
          shapping="+ $27.35 Shipping & Import Fees Deposit"
          rating={5}
          image="imgs/a-product-3.jpg"
          sell="best seller"
        />
      </div>
    </div>
  );
}

export default Home;
