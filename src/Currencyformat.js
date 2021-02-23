import React from "react";
import './CurrencyFormat.css';
import CurrencyFormat from "react-currency-format";
import { GetbasketTotalPrice } from "./Reducer";

import { UseStateValue } from "./Stateprovider";

function SubTotal({}) {
  const [{ basket }] = UseStateValue();
  return (
    <>
      <div className="subtotal">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal (
                <span>
                  {basket.length} {basket.length <= 1 ? "item" : "items"}
                </span>
                ) <strong>{value}</strong>
              </p>
              <div className="checkbox">
                <input type="checkbox" />
                <label>This order contains a gift</label>
              </div>
            </>
          )}
          decimalScale={2}
          value={GetbasketTotalPrice({ basket })}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <button>procced to checkout</button>
      </div>
    </>
  );
}

export default SubTotal;
