import React from "react";
import Confirm from "../components/Confirm";
import { useDispatch } from "react-redux";
import { changePageView } from "../slices/ShippingInfo-slice";
import TopNavbar from "../components/Navbar/TopNavbar";

const ConfirmPage = () => {
  const dispatch = useDispatch();
  dispatch(changePageView(window.location.pathname));

  return (
    <>
      <TopNavbar />
      <Confirm />
    </>
  );
};

export default ConfirmPage;
