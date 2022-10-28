import React, { useState } from "react";
import "./ProductItem.scss";
import ProductForm from "./ProductForm";

const ProductItem = (props) => {
  const [hasError, setHasError] = useState(false);
  const formErrorHandler = (bool) => {
    setHasError(bool);
  };
  return (
    <div className="product-item">
      <h3>{props.item.name}</h3>
      <p>{props.item.description}</p>
      <div className="form-content">
        <span>Price: ${props.item.price}</span>
        <ProductForm
          item={props.item}
          hasError={hasError}
          onError={formErrorHandler}
        />
      </div>
      {hasError && (
        <span className="form-error">Please add a number between 1 and 10</span>
      )}
    </div>
  );
};

export default ProductItem;
