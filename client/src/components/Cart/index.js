import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartFrom from "../UI/CartForm";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../../slices/cart-slice";

import {
  BackdropStyle,
  ModalStyle,
  Headline,
  CartItemWrapper,
  Ul,
  List,
  Image,
  Name,
  Price,
  CartBottom,
  TotalPrice,
  CheckBtn,
  Reminder,
  Amount,
  EmptyCart,
} from "./Cart";

/**********************************************************/
const Cart = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const dispatch = useDispatch();

  const cartReducer = useSelector((state) => state.cartReducer);
  const cartList = cartReducer.items;
  const hasItem = cartList.length > 0;
  const totalAmount = cartReducer.totalAmount.toFixed(2);

  // /**
  //  * 把購物車中的其中一個 Item 刪除的函式，還沒寫完。
  //  * @param {event} e
  //  */
  const cartItemRemoveHandler = (e) => {
    const parentEel = e.target.parentElement.parentElement;
    const targetId = parentEel.dataset.id;
    if (targetId === undefined) {
      return;
    }
    dispatch(removeItemFromCart(targetId));
  };

  const cartItem = (
    <Ul>
      {cartList.map((item) => (
        <List data-id={item.id} key={item.id}>
          <Image src={item.image} />
          <Name>{item.name}</Name>
          <CartFrom />
          <Amount>{item.amount}</Amount>
          <Price>{`$ ${item.price}`}</Price>
          <FontAwesomeIcon
            onClick={cartItemRemoveHandler}
            icon="fa-solid fa-trash"
            style={{ cursor: "pointer", lineHeight: "5" }}
          />
        </List>
      ))}
    </Ul>
  );

  const CartBody = () => (
    <ModalStyle>
      <Headline>
        <div>CART</div>
        <FontAwesomeIcon
          onClick={props.onHiddenCart}
          icon="fa-solid fa-xmark"
          style={{ cursor: "pointer" }}
        />
      </Headline>

      {hasItem ? (
        <CartItemWrapper>{cartItem}</CartItemWrapper>
      ) : (
        <CartItemWrapper>
          <EmptyCart>購物車是空的</EmptyCart>
        </CartItemWrapper>
      )}

      <TotalPrice>
        <div>SubTotal</div>
        <div>$ {totalAmount}</div>
      </TotalPrice>
      <Reminder>Shipping and discount codes are added checkout.</Reminder>
      <CartBottom>
        {hasItem ? (
          <Link to="/checkout">
            <CheckBtn onClick={props.onHiddenCart}>checkout</CheckBtn>
          </Link>
        ) : (
          <Link to="/shop">
            <CheckBtn onClick={props.onHiddenCart}>ADD MEAL NOW</CheckBtn>
          </Link>
        )}
      </CartBottom>
    </ModalStyle>
  );

  return (
    <>
      {!isSubmitted && <BackdropStyle onClick={props.onHiddenCart} />}
      {!isSubmitted && <CartBody />}
    </>
  );
};

export default Cart;

/**********************************************************/
