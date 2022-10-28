import React, { useEffect } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Products from "./products/Products";
import Modal from "./UI/Modal";
import Cart from "./components/cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "./redux-store/cart-actions";
import ErrorContainer from "./UI/ErrorContainer";
import LoaderContainer from "./UI/LoaderContainer";
let isInitial = true;
function App() {
  const isCartShown = useSelector((state) => state.uiState.showCart);
  const cartState = useSelector((state) => state.cartState);
  const notificationState = useSelector((state) => state.uiState.notification);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cartState.isChanged) {
      dispatch(sendCartData(cartState));
    }
  }, [cartState, dispatch]);

  return (
    <div className="App">
      {notificationState.status === "pending" && <LoaderContainer />}
      <Navbar />
      <Products />
      {notificationState.status === "error" && (
        <ErrorContainer message={notificationState.message} />
      )}
      {isCartShown && (
        <Modal>
          <Cart />
        </Modal>
      )}
    </div>
  );
}

export default App;
