import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Drawer from "@mui/material/Drawer";
import CartList from "../../UI/CartList";
import User from "../user";

import {
  CartListWrapper,
  Container,
  Headline,
  NoItem,
} from "../../UI/Drawer/Drawer";

import {
  Header,
  Wrapper,
  IconStyle,
  Notification,
  LinkStyle,
  UserIcon,
} from "../Navigation";

const BottomNavbar = () => {
  const cartReduce = useSelector((state) => state.cartReducer);
  const cartList = cartReduce.items;
  const totalAmount = cartReduce.totalAmount.toFixed(2);
  /**
   * 拿到 cartList 後把
   */
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

  const [showCart, setShowCart] = useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setShowCart((prev) => !prev);
  };

  /**
   * no
   */
  const cartReducer = useSelector((state) => state.cartReducer);
  const totalQuantity = cartReducer.totalQuantity;

  return (
    <>
      <UserIcon>
        {" "}
        <IconStyle
          position="absolute"
          top="1.8rem"
          color="var(--color-grey-dark-1)"
          fontSize="2rem"
          right="4rem"
          radius="50%"
          bgc="var(--color-grey-light-1)"
        >
          <User />
        </IconStyle>
      </UserIcon>
      <Header>
        <Wrapper>
          {" "}
          <LinkStyle
            style={{ height: "100%", display: "flex", alignItems: "center" }}
            to="/"
          >
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-house" />
            </IconStyle>{" "}
          </LinkStyle>{" "}
          <LinkStyle
            style={{ height: "100%", display: "flex", alignItems: "center" }}
            to="/"
          >
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-heart" />
            </IconStyle>{" "}
          </LinkStyle>{" "}
          <LinkStyle
            style={{ height: "100%", display: "flex", alignItems: "center" }}
            to="/search"
          >
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-search" />
            </IconStyle>{" "}
          </LinkStyle>
          <LinkStyle
            style={{ height: "100%", display: "flex", alignItems: "center" }}
            to="/"
          >
            <IconStyle>
              <FontAwesomeIcon icon="fa-solid fa-tag" />
            </IconStyle>{" "}
          </LinkStyle>{" "}
          <LinkStyle
            style={{ height: "100%", display: "flex", alignItems: "center" }}
            to="/"
          >
            <Drawer
              anchor="bottom"
              open={showCart}
              onClose={toggleDrawer("bottom", false)}
            />
            <IconStyle onClick={toggleDrawer("bottom", true)}>
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              <Notification>{totalQuantity}</Notification>
            </IconStyle>{" "}
          </LinkStyle>{" "}
        </Wrapper>{" "}
      </Header>{" "}
    </>
  );
};

export default BottomNavbar;
