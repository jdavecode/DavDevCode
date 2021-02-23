import React from "react";
import "./Product.css";
import { UseStateValue } from "./Stateprovider";

function Product({ id, title, price, shapping, rating, image, sell }) {
  const [{}, dispatch] = UseStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD-TO-CART",
      item: {
        id: id,
        title: title,
        price: price,
        shapping: shapping,
        rating: rating,
        image: image,
        sell: sell,
      },
    });
  };
  return (
    <div Product className="product col-container">
      <div className="product-container">
        <div className="product-content-top">
          <h3>{title}</h3>
          <div className="product-price">
            <small>💰</small>
            <strong>{price}</strong>
            <p className="shapping">{shapping}</p>
          </div>
          <div className="product-rating-container ">
            <div className="product-rating">
              {Array(rating)
                .fill()
                .map((_) => (
                  <p>⭐</p>
                ))}
            </div>

            <div className="product-best-sold">
              <p>{sell}</p>
            </div>
          </div>
        </div>

        <div className="product-content-bottom">
          {/* <div className="product-best-sold">
            <p>{sell}</p>
          </div> */}

          <img src={image} alt="" />
          <div className="product-button">
            <button className="cart-btn" onClick={addToBasket}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
