import React from "react";
import Confirm from "../components/Confirm";
import { useDispatch } from "react-redux";
import { changePageView } from "../slices/ShippingInfo-slice";

const ConfirmPage = () => {
  const dispatch = useDispatch();
  dispatch(changePageView(window.location.pathname));

  return <Confirm />;
};

export default ConfirmPage;
