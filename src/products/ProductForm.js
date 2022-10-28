import React, { useRef } from "react";
import "./ProductForm.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux-store/cartSlice";

const ProductForm = (props) => {
  const { item } = props;
  const formInputRef = useRef();
  const dispatch = useDispatch();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const inputVal = formInputRef.current.value;
    if (inputVal < 1 || inputVal > 10) {
      props.onError(true);
      return;
    }
    if (props.hasError) {
      props.onError(false);
    }
    dispatch(cartActions.addToCart({ ...item, quantityToAdd: +inputVal }));
  };
  return (
    <div className="product-form-container">
      <form onSubmit={submitFormHandler} className="product-form" noValidate>
        <input
          ref={formInputRef}
          type="number"
          min={1}
          max={10}
          defaultValue={1}
        />
        <button>Add to Cart</button>
      </form>
    </div>
  );
};

export default ProductForm;
