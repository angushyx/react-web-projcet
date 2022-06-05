import React from "react";
import ShippingForm from "../components/ShippingForm";
import CheckStep from "../components/UI/CheckStep";
import {
  Container,
  Headline,
} from "../components/ShippingForm/ShippingFormElement";
import Footer from "../components/UI/Footer";
import { useDispatch } from "react-redux";
import { changePageView } from "../slices/ShippingInfo-slice";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  dispatch(changePageView(window.location.pathname));

  return (
    <>
      <Container>
        {" "}
        <CheckStep
          bgc1="#222"
          after1=" "
          bgc2="#ccc"
          after2=" "
          bgc3="#ccc"
          after3=" "
          width2="1.5rem"
          height2="1.5rem"
          width3="1.5rem"
          height3="1.5rem"
        />
        <Headline></Headline>
        <ShippingForm />
      </Container>
      <Footer />
    </>
  );
};

export default CheckoutPage;