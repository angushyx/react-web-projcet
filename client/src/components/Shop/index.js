import React, { useState } from "react";
import Card from "../UI/Card";
import { useSelector } from "react-redux";

import {
  MainContainer,
  Main,
  Sidebar,
  UnorderedList,
  Commodity,
  RadioInput,
  InputWrapper,
} from "./ShopList";

const ShopList = () => {
  const commodityReducer = useSelector((state) => state.commodityReducer);
  const commodityList = commodityReducer.commodity;

  const categoryReducer = useSelector((state) => state.categoryReducer);

  const categoryList = categoryReducer.category;

  const [commodity, setCommodity] = useState(commodityList);

  const onChangeHandler = (e) => {
    const target = e.currentTarget.value;
    const filterItems = commodityList.filter((item) => {
      return item.category === target;
    });

    if (target === "all") {
      setCommodity(commodityList);
    } else {
      setCommodity(filterItems);
    }
  };

  const shopList = commodity.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      description={item.Description}
      image={item.image}
      category={item.category}
    />
  ));

  /**
   * 當點擊到
   */
  // console.log(shopList.map((item) => console.log(item.props)));

  return (
    <>
      <MainContainer>
        <Main>
          <Sidebar>
            <UnorderedList>
              <InputWrapper>
                <RadioInput
                  onClick={onChangeHandler}
                  name="category"
                  value="all"
                  type="radio"
                />
                <label htmlFor="all" name="category">
                  all
                </label>
              </InputWrapper>
              {categoryList.map((item) => (
                <>
                  <InputWrapper>
                    <RadioInput
                      onClick={onChangeHandler}
                      type="radio"
                      name="category"
                      value={item.category}
                    />
                    <label id={item.id} htmlFor={item.category}>
                      {item.category}
                    </label>
                  </InputWrapper>
                </>
              ))}
            </UnorderedList>
          </Sidebar>
          <Commodity>{shopList}</Commodity>
        </Main>
      </MainContainer>
    </>
  );
};

export default ShopList;
