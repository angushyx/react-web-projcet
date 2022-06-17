import React from "react";
import { useSelector } from "react-redux";


import { Section,Container,Title } from "../UI/Public";
import {
  HeadlineWrapper,
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
      <Container widther>
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
