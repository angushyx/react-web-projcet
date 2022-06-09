import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { InfoText } from "../Confirm/ConfirmElement";
import { ImageStyle } from "../Payment/PaymentElement";
import CartForm from "./CartForm";
import { devices } from "../../MediaQuery/MediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../slices/cart-slice";
import { IconStyle } from "../Navbar/Navigation";

export const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px #ccc solid;
  gap: 3rem;
  width: 100%;
`;
// export const BrandWrapper = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   justify-content: space-evenly;
//   text-align: center;
// `;

export const ProductDetail = styled.div``;
export const FlexWrapper = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: flex-start;
  align-items: flex-end;
`;
export const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 3rem;
  @media ${devices.mobileL} {
    flex-direction: row;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  text-align: start;
  align-items: flex-start;
`;

const CartList = (props) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);
  const cartList = cart.items;
  const { id, image, name, price, description, amount } = props;
  // console.log(id);
  // /**
  //  * 把購物車中的其中一個 Item 刪除的函式，還沒寫完。
  //  * @param {event} e
  //  */
  const cartItemRemoveHandler = (e) => {
    console.log(e.target.parentElement);
    const parentEel = e.target.parentElement;
    const targetId = parentEel.dataset.id;
    if (targetId === undefined) {
      return;
    }
    dispatch(removeItemFromCart(targetId));
  };

  // const a = (e) => {
  //   // console.log(cartList[index].name);
  //   console.log(e);
  // };

  /**
   * 需要找到相同 index 的
   */

  const totalAmount = cart.totalAmount.toFixed(2);

  // const cartItems = cartList.map((item) => {
  //   return {
  //     name: item.name,
  //     itemAmount: item.amount,
  //     itemPrice: item.price,
  //   };
  // });
  // console.log(cartItems);
  // 讓點擊的 id 不同
  // console.log(amount);

  return (
    <>
      <ProductWrapper data-id={id}>
        <ProductDetail>
          <FlexWrapper>
            <div>
              <ImageStyle
                height="10rem"
                width="10rem"
                src={image}
                alt="product"
              />{" "}
            </div>{" "}
            <TextWrapper>
              <h1>{name}</h1>
              <h3>{description}</h3>
            </TextWrapper>
            <AmountWrapper>
              description category
              <CartForm itemAmount={amount} id={id} />
              <InfoText fontSize="2.5rem" display="flex" mb="0">
                NT$&nbsp;<strong>{price}</strong>
              </InfoText>{" "}
            </AmountWrapper>{" "}
          </FlexWrapper>
        </ProductDetail>{" "}
        <IconStyle hoverBgc="none" onClick={cartItemRemoveHandler}>
          <FontAwesomeIcon
            icon="fa-solid fa-trash"
            style={{ zIndex: "-1", cursor: "pointer", fontSize: "2rem" }}
          />
        </IconStyle>
      </ProductWrapper>{" "}
      <div>{totalAmount}</div>
    </>
  );
};
//  <TextWrapper>
//    <InfoText mb="0">Quantity: {item.amount}</InfoText>
//  </TextWrapper>;
export default CartList;

//  <BrandWrapper>
//    <div style={{ margin: "0 auto" }}>
//      <ImageStyle
//        width="3rem"
//        height="3rem"
//        src={require("../../image/picasa.png")}
//      />
//    </div>
//    <div>
//      <h2>OliveCreativeCny</h2>
//      <div>Made just for yos</div>
//    </div>
//  </BrandWrapper>;
