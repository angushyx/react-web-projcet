import React from "react";
import { useSelector } from "react-redux";

import { ImageStyle } from "../../Payment/PaymentElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../../slices/cart-slice";
import CartForm from "../CartForm";

import {
  CartContainer,
  Headline,
  TrashIcon,
  ProductWrapper,
  ImageWrapper,
  ProductDetail,
  FlexWrapper,
  AmountWrapper,
  TextWrapper,
  PriceText,
} from "./CartList";

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

export const CartHeadline = () => {
  const cartReducer = useSelector((state) => state.cartReducer);
  const totalAmount = cartReducer.totalAmount.toFixed(2);
  return (
    <Headline>
      <div>cart</div>
      <div> $ {totalAmount} NTD</div>{" "}
    </Headline>
  );
};

const CartList = (props) => {
  const dispatch = useDispatch();

  const { id, image, name, price, description, amount } = props;
  // console.log(id);
  // /**
  //  * 把購物車中的其中一個 Item 刪除的函式，還沒寫完。
  //  * @param {event} e
  //  */
  const cartItemRemoveHandler = (e) => {
    const parentEel = e.target.parentElement.parentElement;
    const deleEel = parentEel.parentElement;
    const targetId = deleEel.dataset.id;

    if (targetId === undefined) {
      return;
    }
    dispatch(removeItemFromCart(targetId));
  };

  /**
   * 需要找到相同 index 的
   */

  return (
    <>
      <ProductWrapper>
        <ProductDetail data-id={id}>
          <FlexWrapper data-id={id}>
            <ImageWrapper>
              <ImageStyle
                height="8rem"
                width="8rem"
                src={image}
                alt="product"
              />{" "}
            </ImageWrapper>{" "}
            <TextWrapper>
              <h1>{name}</h1>
              <h3>{description}</h3>
            </TextWrapper>
            <AmountWrapper>
              <CartForm itemAmount={amount} id={id} />
              <PriceText>
                NT$&nbsp;<span>{price}</span>
              </PriceText>{" "}
            </AmountWrapper>{" "}
            <TrashIcon
              hoverBgc="var(--color-primary-light)"
              radius="50%"
              fontSize="2rem"
              hBgc="var(--color-primary-light)"
              onClick={cartItemRemoveHandler}
            >
              <FontAwesomeIcon icon="fa-solid fa-trash" />
            </TrashIcon>
          </FlexWrapper>{" "}
        </ProductDetail>{" "}
      </ProductWrapper>{" "}
    </>
  );
};

export default CartList;
