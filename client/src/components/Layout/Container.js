import Navigation from "./Navigation";
import Cart from "../Cart";
import { useState } from "react";

const Container = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  //把它當成 toggle 用
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hiddenCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onHiddenCart={hiddenCartHandler} />}
      {props.children}
      <Navigation />
    </>
  );
};

export default Container;