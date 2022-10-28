import React from "react";
import "./ErrorContainer.scss";

const ErrorContainer = (props) => {
  return (
    <div className="error-container">
      <h2>Opps Something went wrong!</h2>
      <p>{props.message}</p>
      <p>Please try again</p>
    </div>
  );
};

export default ErrorContainer;
