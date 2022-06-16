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

export const TrashIcon = styled(IconStyle)`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(60%, -70%);

  @media ${devices.mobileL} {
    transform: translate(50%, -30%);
  }
  @media ${devices.tablet} {
    right: -1rem;
  }
`;
export const ProductWrapper = styled.div`
  display: flex;
  padding-top: 2.5rem;
  border-top: 1px #ccc solid;
  gap: 1rem;
  width: 100%;
  margin-top: 1.2rem;
  @media ${devices.mobileL} {
    padding-top: 1.4rem;
    margin-top: 1.4rem;
  }
  @media ${devices.tablet} {
    padding-top: 1.7rem;
  }
  @media ${devices.tablet} {
    padding-top: 2rem;
  }
`;
// export const BrandWrapper = styled.div`
//   display: flex;
//   flex: 1;
//   flex-direction: column;
//   justify-content: space-evenly;
//   text-align: center;
// `;

const ImageWrapper = styled.div`
  height: 8rem;
  width: 8rem;
`;
export const ProductDetail = styled.div`
  width: 90%;
  margin: 0 auto;
`;
export const FlexWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 1.5rem;
  justify-content: flex-start;
  align-items: flex-end;
`;
export const AmountWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  gap: 3rem;
  font-size: 1rem;
  @media ${devices.mobileL} {
    flex-direction: row;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  font-size: 0.7rem;
  width: 50%;
  @media ${devices.mobileL} {
    font-size: 0.7rem;
  }
  @media ${devices.tablet} {
    font-size: 0.8rem;
  }
`;
const PriceText = styled.div`
  font-size: 1.5rem;
`;

const CartList = (props) => {
  const dispatch = useDispatch();
  const cartReducer = useSelector((state) => state.cartReducer);

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

  const totalAmount = cartReducer.totalAmount.toFixed(2);

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
