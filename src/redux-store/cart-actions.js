import { uiActions } from "./uiSlice";
import { cartActions } from "./cartSlice";
const FIREBASE_URL = "https://mini-redux-app-default-rtdb.firebaseio.com";

export const sendCartData = (cart) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const res = await fetch(`${FIREBASE_URL}/cart.json`, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalAmount: cart.totalAmount,
          totalQuantity: cart.totalQuantity,
        }),
      });
      if (!res.ok) {
        throw new Error("Sending cart data failed!");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          title: "Error!",
          status: "error",
          message: error.message,
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.setNotification({
        title: "Pending",
        status: "pending",
        message: "fetching data",
      })
    );
    const fetchData = async () => {
      const res = await fetch(`${FIREBASE_URL}/cart.json`);
      if (!res.ok) {
        throw new Error("Fetching data failed");
      }
      const data = res.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData?.items || [],
          totalAmount: cartData?.totalAmount || 0,
          totalQuantity: cartData?.totalQuantity || 0,
        })
      );
      dispatch(
        uiActions.setNotification({
          title: "Success!",
          status: "success",
          message: "Data successfully fetched",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.setNotification({
          title: "Error!",
          status: "error",
          message: error.message,
        })
      );
    }
  };
};
