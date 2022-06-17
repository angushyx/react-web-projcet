import React from "react";
import { useSelector } from "react-redux";


import { Section,Container } from "../UI/Public";
import {
  HeadlineWrapper,
  Title,
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
    <Section>
      <HeadlineWrapper>
        <Title>選擇類別</Title>
      </HeadlineWrapper>
      <Container>
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
      </Container>
    </Section>
  );
};

export default Category;
