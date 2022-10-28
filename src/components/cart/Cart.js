import React, { useState, useEffect } from "react";
import "./Cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../redux-store/uiSlice";
import { cartActions } from "../../redux-store/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const cartState = useSelector((state) => state.cartState);
  const dispatch = useDispatch();
  const [isOrdering, setIsOrdering] = useState(false);

  useEffect(() => {
    if (isOrdering) {
      dispatch(
        cartActions.replaceCart({ items: [], totalAmount: 0, totalQuantity: 0 })
      );
    }
  }, [isOrdering, dispatch]);

  const orderContent = (
    <React.Fragment>
      <h2 className="order-heading">Thank you for your order</h2>
      <p className="order-para">
        This is just a demo app so we won't be needing your address and card
        information
      </p>
    </React.Fragment>
  );

  let cartContent;
  if (cartState.items.length === 0) {
    cartContent = <h2>No Products To Show</h2>;
  } else {
    cartContent = cartState.items.map((item) => (
      <CartItem key={item.id} item={item} />
    ));
  }
  return (
    <div className="cart" onClick={(e) => e.stopPropagation()}>
      {!isOrdering && cartContent}
      {isOrdering && orderContent}

      <button
        className="cart-close-btn"
        onClick={() => dispatch(uiActions.hideCart())}
      >
        &times;
      </button>
      {cartState.items.length !== 0 && !isOrdering && (
        <React.Fragment>
          <div className="cart-total">
            {" "}
            <h2 className="cart-total-heading">Total Amount</h2>{" "}
            <span>${cartState.totalAmount}</span>{" "}
          </div>
          <div className="cart-actions">
            <button
              className="cart-end-btn"
              onClick={() => {
                dispatch(uiActions.hideCart());
                setIsOrdering(false);
              }}
            >
              Close
            </button>
            <button
              className="cart-order-btn"
              onClick={() => setIsOrdering(true)}
            >
              Order
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Cart;
