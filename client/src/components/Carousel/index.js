import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useSelector } from "react-redux";
import { Container ,Title} from "../UI/Public";

import {
  HeadlineWrapper,
  CaretLeft,
  CaretRight,
  CardUl,
  CardList,
  ListImage,
} from "./CarouselElement";


//TODO 點擊 < 或 > 改變 SCROLL 位置
const Headline = () => {
  return (
    <>
      <HeadlineWrapper>
        <Title>挑選種類</Title>
      </HeadlineWrapper>
    </>
  );
};

const Cards = (props) => {
  //定義目前的頁面位置
  const [current, setCurrent] = useState(0);
  //設定頁面總長度
  const length = 2;
  //取出資料並切分資料
  const commodityReducer = useSelector((state) => state.commodityReducer);
  const commodityList = commodityReducer.commodity;
  const sliceOne = commodityList.slice(0, 6);
  const sliceTwo = commodityList.slice(6, 12);
  // const sliceThree = commodityList.slice(8, 12);

  const colors = "yellow";
  //設定一個空的陣列來存放目前的 PAGE
  let currentPage = [];

  //用 if else 來判斷目前所在位置
  if (current === 0) {
    currentPage = sliceOne;
  } else if (current === 1) {
    currentPage = sliceTwo;
  }
  //  else if (current === 2) {
  //     currentPage = sliceThree;
  //   }
  //下一頁與上一頁的 handler
  const nextSlice = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const pervSlice = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <Container>
        <CardUl>
          <CaretLeft onClick={pervSlice} />
          {currentPage.map((item) => (
            <CardList key={item.id}>
              <ListImage src={item.image} />
            </CardList>
          ))}
          <CaretRight onClick={nextSlice} />
        </CardUl>
      </Container>{" "}
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
    <div>
      <Headline />
      <Cards key={uuidv4()} onToggle={toggle} />
      {/* <SchemeModal isOpen={isOpen} /> */}
    </div>
  );
};

export default Carousel;
