import styled from "styled-components";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../slices/cart-slice";

/****** CartInput and Button  ******/
const AmountWrapper = styled.form`
  display: flex;
  color: #666;
  align-items: center;
`;

const CartBtn = styled.button`
  display: flex;
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  border-radius: 50%;
  align-items: center;
  border: 1px solid #000;
  justify-content: center;
  transition: 0.3s all;

  &:hover,
  &:active {
    background-color: #aaa;
    color: #fff;
  }
`;
const Input = styled.input`
  border: none;
  width: 4rem;
  height: 4rem;

  text-align: center;
`;

const CartForm = React.forwardRef((props, ref) => {
  const amountInputRef = useRef();
  const itemIdRef = useRef(props.id);

  const dispatch = useDispatch();

  const commodityList = useSelector(
    (state) => state.commodityReducer.commodity
  );

  const AddToCartHandler = (e) => {
    e.preventDefault();

    const itemId = itemIdRef.current;

    const newItem = commodityList.find((item) => {
      return item.id === itemId;
    });

    const enterAmount = amountInputRef.current.value;
    let enterAmountNum = +enterAmount;
    const enterItemPrice = newItem.price * enterAmountNum;

    if (
      enterAmountNum.length === 0 ||
      enterAmountNum < 1 ||
      enterAmountNum > 5
    ) {
      return;
    }

    dispatch(addToCart({ newItem, enterAmountNum, enterItemPrice }));
  };

  return (
    <AmountWrapper>
      <CartBtn>-</CartBtn>
      <Input
        ref={amountInputRef}
        label="Amount"
        min="1"
        max="5"
        type="text"
        defaultValue="1"
        id="amount"
      />
      <CartBtn onClick={AddToCartHandler}>+</CartBtn>
    </AmountWrapper>
  );
});

export default CartForm;
