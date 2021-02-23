import React from "react";
import "./Checkout.css";
import Header from "./Header";
import Banner from "./Banner";
import Checkoutproduct from "./Checkoutproduct";
import { UseStateValue } from "./Stateprovider";
import CurrencyFormat from "./Currencyformat";

function Checkout() {
  const [{ basket }] = UseStateValue();

  return (
    <div className="checkout">
      <Header />
      <Banner image="imgs/banner-3.jpg" />

      <div className="checkout-Content">
        {basket.length === 0 ? (
          <div className="checkout-title">
            <h3>your shapping basket is empty</h3>
            <p>
              you have no item in your basket, to buy one or more item, click
              "add to cart" next to the item
            </p>
          </div>
        ) : (
          <div className="checkout-Content-Product">
            <div className="checkout-Content-Product-header ">
              <h3>you shapping basket</h3>
              <CurrencyFormat className="currency-format" />
            </div>
            {basket.map((item) => (
              <Checkoutproduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
