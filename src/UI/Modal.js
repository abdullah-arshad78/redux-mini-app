import React from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";
import { useDispatch } from "react-redux";
import { uiActions } from "../redux-store/uiSlice";

const portalEl = document.getElementById("overlay");
const Backdrop = (props) => {
  const dispatch = useDispatch();
  return (
    <div
      className="backdrop"
      onClick={() => {
        dispatch(uiActions.hideCart());
      }}
    >
      {props.children}
    </div>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {createPortal(<Backdrop>{props.children}</Backdrop>, portalEl)}
    </React.Fragment>
  );
};

export default Modal;
