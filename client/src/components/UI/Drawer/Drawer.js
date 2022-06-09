import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hamburger } from "../../HeroPart/HeroElement";
import { useSelector } from "react-redux";
import CartList from "../CartList";
import { ImageStyle } from "../../Payment/PaymentElement";
import styled from "styled-components";
import { BtnStyle } from "../Button";
import { devices } from "../../../MediaQuery/MediaQuery";
import { useNavigate } from "react-router-dom";
import { Notification } from "../../Navbar/Navigation";
import { IconStyle } from "../../Navbar/Navigation";

export const CartContainer = styled.div`
  max-width: 55rem;
  height: 100%;
  text-align: center;
  @media ${devices.mobileL} {
    width: 80vw;
  }
  @media ${devices.tablet} {
    width: 70vw;
    min-width: 45rem;
  }
  @media ${devices.tablet} {
    max-width: 50vw;
  }
`;

export const CartListWrapper = styled.div`
  position: relative;
  overflow: scroll;
  text-align: center;
  width: 100vw;
  min-height: ${(props) => props.minH || "auto"};
  margin-bottom: ${(props) => props.mt || "auto"};

  @media ${devices.mobileL} {
    width: 80vw;
  }
  @media ${devices.tablet} {
    width: 70vw;
    min-width: 45rem;
  }
  @media ${devices.tablet} {
    max-width: 50vw;
  }
`;
export const Container = styled.div`
  height: 50%;
  width: 100%;
  @media ${devices.tablet} {
    width: 90%;
    margin: 0 auto;
  }
`;

export const Headline = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;

  font-size: 1.5rem;
  margin: 2rem auto;
  color: #222;
  @media ${devices.mobileL} {
    font-size: 1.7rem;
  }
  @media ${devices.tablet} {
    font-size: 2.3rem;
  }
`;

export const NoItem = () => {
  return (
    <CartContainer>
      <div style={{ position: "relative" }}>
        <ImageStyle
          height="80%"
          width="80%"
          style={{ margin: "5rem auto" }}
          src={require("../../../image/undraw_shopping_app_flsj.png")}
          alt=""
        />{" "}
      </div>
      <h1>Cart Is empty</h1>
    </CartContainer>
  );
};

export default function TemporaryDrawer(props) {
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
      navigate("/checkout");
    } else {
      navigate("/shop");
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
              {cartList.length !== 0 ? (
                <CartListWrapper>
                  {" "}
                  <Headline>
                    <div>cart</div>
                    <div> $ {totalAmount} NTD</div>{" "}
                  </Headline>
                  <Container>{cartItems}</Container>
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
