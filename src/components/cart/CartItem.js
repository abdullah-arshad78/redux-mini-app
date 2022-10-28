import React from "react";
import "./CartItem.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux-store/cartSlice";

const CartItem = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(cartActions.addToCart({ ...item, quantityToAdd: 1 }));
  };
  const removeFromCartHandler = () => {
    dispatch(cartActions.removeFromCart(item.id));
  };
  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <span>Price: ${item.price}</span>
      <div className="cart-item-actions">
        <button
          className="cart-item-remove-btn"
          onClick={removeFromCartHandler}
        >
          Remove
        </button>
        <span>&times;{item.quantity}</span>
        <button className="cart-item-add-btn" onClick={addToCartHandler}>
          Add
        </button>
      </div>
    </div>
  );
};

export default CartItem;
