import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hamburger } from "../../HeroPart/HeroElement";
import { Notification } from "../../Navbar/Navigation";
import { useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import { useSelector } from "react-redux";
import CartList, { NoItem, CartHeadline } from "../CartList";
import { BtnStyle } from "../Button";
import { CartListWrapper, Container } from "../CartList/CartList";

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
            <Drawer
              style={{ position: "absolute" }}
              anchor="left"
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {cartList.length !== 0 ? (
                <CartListWrapper mt="0">
                  <>
                    <CartHeadline />
                    <Container>
                      <CartList />
                    </Container>
                  </>{" "}
                </CartListWrapper>
              ) : (
                <NoItem />
              )}{" "}
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
