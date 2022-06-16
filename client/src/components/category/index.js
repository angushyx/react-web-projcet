import React from "react";
import { useSelector } from "react-redux";

import {
  CarouselLayout,
  HeadlineWrapper,
  Title,
  CartListContainer,
  ListImage,
} from "../Carousel/CarouselElement";

import {
  CategoryUl,
  CategoryList,
  CategoryWrapper,
  CategoryText,
} from "./CategoryElement";

const Category = () => {
  const categoryReducer = useSelector((state) => state.categoryReducer);

  const categoryList = categoryReducer.category;

  return (
    <CarouselLayout>
      <HeadlineWrapper>
        <Title>選擇類別</Title>
      </HeadlineWrapper>
      <CartListContainer>
        <CategoryUl>
          {" "}
          {categoryList.map((item) => (
            <CategoryList>
              {" "}
              <CategoryWrapper>
                <ListImage src={item.image} />

                <CategoryText>
                  <div> {item.category}</div>
                </CategoryText>
              </CategoryWrapper>
            </CategoryList>
          ))}
        </CategoryUl>
      </CartListContainer>
    </CarouselLayout>
  );
};

export default Category;
