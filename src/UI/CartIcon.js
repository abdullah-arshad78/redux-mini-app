import React, { useEffect, useState } from "react";
import "./CartIcon.scss";
import { ImCart } from "react-icons/im";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../redux-store/uiSlice";

const CartIcon = () => {
  const cartQuantity = useSelector((state) => state.cartState.totalQuantity);
  const [isBump, setIsBump] = useState(false);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCart());
  };

  useEffect(() => {
    setIsBump(true);
    setTimeout(() => {
      setIsBump(false);
    }, 300);
  }, [cartQuantity]);

  return (
    <div
      className={`cart-icon-container ${isBump ? "bump" : ""}`}
      onClick={toggleCartHandler}
    >
      <ImCart className="cart-icon" />
      <span>{cartQuantity}</span>
    </div>
  );
};

export default CartIcon;
