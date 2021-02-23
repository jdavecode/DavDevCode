import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { auth } from "./Firebase";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import { UseStateValue } from "./Stateprovider";

function Header() {
  const [{ basket, user }] = UseStateValue();

  function logOut(event) {
    event.preventDefault();

    if (user) {
      auth.signOut();
    }
  }

  const login = (e) => {
    e.preventDefault();
    // if(user) {

    // }
    auth.signOut();
  };

  console.log(basket.length);
  return (
    <div className="header">
      <div className="header-container">
          <Link to="/" className="header-logo">
            <img src="imgs/a-img-icon.png" alt="" />
          </Link>

        <div className="header-search">
          <input type="text" className="input" />
          <SearchIcon className="SearchIcon" />
        </div>

        <div className="header-links">
          
          <div className="header-option">
            <Link to={!user && "/login"}>
              <small>
                Hello, {!user && "sign in"} {user?.email}
              </small>
              <strong>
                {user ? (
                  <Link className="logout" onClick={logOut}>
                    log out
                  </Link>
                ) : (
                  "Account & list"
                )}{" "}
              </strong>
            </Link>
          </div>

          <Link to="/">
            <small>return</small>
            <strong>
            & orders
            </strong>
          </Link>
          <Link className='shoppingBasket' to="/shappingcart">
            <span className="shoppingBasketCount">{basket?.length}</span>
            <strong  className='shoppingcart'>
              <ShoppingCartIcon className="shping-cart" />
              <small className="shp-title">cart</small>
            </strong>
          </Link>
          {/* <Link onClick={logOut()}>logOut</Link> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
