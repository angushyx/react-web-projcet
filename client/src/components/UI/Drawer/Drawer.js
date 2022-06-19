import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hamburger } from "../../HeroPart/HeroElement";
import { Notification } from "../../Navbar/Navigation";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { useSelector } from "react-redux";
import CartList from "../CartList";
import { BtnStyle } from "../Button";
import styled from "styled-components";
import { devices } from "../../../MediaQuery/MediaQuery";
import { NoItem, CartHeadline } from "../CartList";
import { CartListWrapper } from "../CartList/CartList";

const Container = styled.div`
  height: 50%;
  width: 100%;
  @media ${devices.tablet} {
    width: 90%;
    margin: 0 auto;
  }
`;

export default function TemporaryDrawer() {
  const navigate = useNavigate();
  const cartReducer = useSelector((state) => state.cartReducer);

  const cartList = cartReducer.items;

  const [state, setState] = React.useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  });

  const checkoutHandler = () => {
    if (cartList.length !== 0) {
      navigate("/review/checkout");
    } else {
      navigate("/meals");
    }
  };

  const totalAmount = cartReducer.totalAmount.toFixed(2);

  const cartItems = cartList.map((item) => (
    <CartList
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
      description={item.description}
      category={item.category}
      amount={item.amount}
    />
  ));

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Hamburger onClick={toggleDrawer("left", true)}>
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />{" "}
            <Notification right="-.5rem">
              {cartReducer.totalQuantity}
            </Notification>
          </Hamburger>

          <div>
            {" "}
            <Drawer
              style={{ position: "absolute" }}
              anchor="left"
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {" "}
              <CartListWrapper mt="0">
                {cartList.length !== 0 ? (
                  <>
                    <CartHeadline />
                    <Container>{cartItems}</Container>
                  </>
                ) : (
                  <NoItem />
                )}{" "}
              </CartListWrapper>
              <BtnStyle
                style={{
                  alignSelf: "center",
                  padding: "1rem",
                  marginBottom: "2rem ",
                }}
                height="3rem"
                width="85%"
                onClick={checkoutHandler}
              >
                {cartList.length !== 0 ? "Checkout" : " Go to Shopping!"}
              </BtnStyle>
            </Drawer>{" "}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
