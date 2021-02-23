import React from "react";
import "./Checkoutproduct.css";
import { UseStateValue } from "./Stateprovider";

function Checkoutproduct({ id, title, price, rating, image }) {
  const [{}, dispatch] = UseStateValue();

  const spliceFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout-products">
      <div className="checkout-Content">
        <div className="item-1">
          <img src={image} alt="" />
        </div>

        <div className="item-2">
          <h3>{title}</h3>
          <div className="product-price">
            <small>💰</small>
            <strong>{price}</strong>
          </div>
          <div className="product-rating ">
            {Array(rating)
              .fill()
              .map((_) => (
                <p>⭐</p>
              ))}
          </div>
          <button onClick={spliceFromBasket} className="remove-btn">
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkoutproduct;
