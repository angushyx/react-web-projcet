import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useSelector } from "react-redux";
import {
  CarouselLayout,
  HeadlineWrapper,
  Title,
  CaretContainer,
  CaretLeft,
  CaretRight,
  CartListContainer,
  CardUl,
  CardList,
  ListImage,
  FoodInfo,
  FoodTitle,
  FoodDescription,
} from "./CarouselElement";

//TODO 點擊 < 或 > 改變 SCROLL 位置
const Headline = () => {
  return (
    <>
      <HeadlineWrapper>
        <Title>Choose One Scheme</Title>
      </HeadlineWrapper>
    </>
  );
};

const Cards = (props) => {
  //定義目前的頁面位置
  const [current, setCurrent] = useState(0);
  //設定頁面總長度
  const length = 3;
  //取出資料並切分資料
  const commodityReducer = useSelector((state) => state.commodityReducer);
  const commodityList = commodityReducer.commodity;
  const sliceOne = commodityList.slice(0, 4);
  const sliceTwo = commodityList.slice(4, 8);
  const sliceThree = commodityList.slice(-4);

  const colors = "yellow";
  //設定一個空的陣列來存放目前的 PAGE
  let currentPage = [];

  //用 if else 來判斷目前所在位置
  if (current === 0) {
    currentPage = sliceOne;
  } else if (current === 1) {
    currentPage = sliceTwo;
  } else if (current === 2) {
    currentPage = sliceThree;
  }

  //下一頁與上一頁的 handler
  const nextSlice = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const pervSlice = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <CartListContainer>
        <CardUl>
          <CaretLeft onClick={pervSlice} />
          {currentPage.map((item) => (
            <CardList key={item.id}>
              <ListImage src={item.image} />
              <FoodInfo footerColor={colors}>
                <FoodTitle>{item.name}</FoodTitle>
                <FoodDescription>{item.Description}</FoodDescription>
                <button onClick={props.onToggle}>Check out</button>
              </FoodInfo>
            </CardList>
          ))}
          <CaretRight onClick={nextSlice} />
        </CardUl>
      </CartListContainer>{" "}
    </>
  );
};

const Carousel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <CarouselLayout>
      <Headline />
      <Cards key={uuidv4()} onToggle={toggle} />
      {/* <SchemeModal isOpen={isOpen} /> */}
    </CarouselLayout>
  );
};

export default Carousel;
