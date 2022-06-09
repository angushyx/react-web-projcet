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
import { Title } from "../../HeroPart/HeroElement";
import { devices } from "../../../MediaQuery/MediaQuery";
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
  width: 55rem;
  height: 100%;
  text-align: center;
`;

export const CartListWrapper = styled.div`
  overflow: scroll;
  text-align: center;
  width: 100vw;

  @media ${devices.mobileL} {
    width: 100vw;
  }
  @media ${devices.tablet} {
    width: 65vw;
  }
`;
export const Container = styled.div`
  width: 90%;
  height: 50%;
  margin: 0 4rem;
`;

export default function TemporaryDrawer() {
  const cartReducer = useSelector((state) => state.cartReducer);

  const cartList = cartReducer.items;

  const [state, setState] = React.useState({
    left: false,
  });

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

  const NoItem = () => {
    return (
      <CartContainer>
        <div>
          <ImageStyle
            height="80%"
            width="80%"
            style={{ margin: "5rem auto" }}
            src={require("../../../image/undraw_shopping_app_flsj.png")}
            alt=""
          />
        </div>
        <h1>Cart Is empty</h1>
      </CartContainer>
    );
  };
  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Hamburger onClick={toggleDrawer(anchor, true)}>
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
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
                  <Title>cart</Title>
                  <Container>{cartItems}</Container>{" "}
                </CartListWrapper>
              ) : (
                <NoItem />
              )}{" "}
              <h2></h2>
              {/* <Link style={{ all: "unset" }} to="/shop"> */}
              <BtnStyle
                style={{
                  alignSelf: "center",
                  padding: "1rem",
                  marginBottom: "2rem ",
                }}
                height="3rem"
                width="85%"
              >
                Checkout
              </BtnStyle>
              {/* </Link> */}
            </Drawer>{" "}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
