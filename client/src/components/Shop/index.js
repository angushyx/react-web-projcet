import React from "react";
import Card from "../UI/Card";
import { useSelector } from "react-redux";

import {
  MainContainer,
  Main,
  Sidebar,
  UnorderedList,
  CategoryList,
  Commodity,
} from "./ShopList";

const ShopList = () => {
  const commodityReducer = useSelector((state) => state.commodityReducer);
  const commodityList = commodityReducer.commodity;

  const shopList = commodityList.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      description={item.Description}
      image={item.image}
    />
  ));

  return (
    <>
      <MainContainer>
        <Main>
          <Sidebar>
            <UnorderedList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
              <CategoryList>FURNITURE</CategoryList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
              <CategoryList>SPRING '22 STORIES</CategoryList>
            </UnorderedList>
          </Sidebar>
          <Commodity>{shopList}</Commodity>
        </Main>
      </MainContainer>
    </>
  );
};

export default ShopList;
