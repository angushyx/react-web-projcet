import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

import { Link } from "react-router-dom";
import { BackdropStyle } from "../Cart/Cart";
import Input from "../UI/Input";
import Button from "../UI/Button";

import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  Headline,
  HeadlineWrapper,
  HeadlineItem,
  MainWrapper,
  HeroWrapper,
  MainImg,
  SubImgOne,
  SubImgTwo,
  SubImgThree,
  SubImgFour,
  DescriptionWrapper,
  RatingWrapper,
  RatingText,
  FoodName,
  HeadlineItemTitle,
  HeadlineItemInfo,
  StarWrapper,
  HeadlineItemContent,
  SubInfo,
  ContextWrapper,
  DetailHeadline,
  ButtonWrapper,
  SplitLine,
  AllInfo,
  DetailBtn,
  CheckoutModal,
  ImageStyleFree,
  MainContainer,
} from "./DetailElement";

const Detail = () => {
  const navigate = useNavigate();

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const params = useParams();
  const commodityReducer = useSelector((state) => state.commodityReducer);
  const commodityList = commodityReducer.commodity;
  const detailProduct = commodityList.find((item) => {
    return item.id === params.itemId;
  });

  const checkoutModalHandler = () => {
    setShowCheckoutModal((prev) => !prev);
  };

  const LoginByGoogleHandler = () => {
    window.open("http://localhost:8080/auth/google", "_self");
  };

  return (
    <>
      {showCheckoutModal && (
        <>
          <BackdropStyle onClick={checkoutModalHandler}>
            <CheckoutModal>
              <Headline>Go to Checkout</Headline>
              <div>
                <Link to="/checkout">
                  <ButtonWrapper>
                    <DetailBtn>以訪客身分購買</DetailBtn>
                  </ButtonWrapper>
                </Link>
                <SplitLine>OR</SplitLine>
                <from>
                  <h1>Sign in or register</h1>
                  <div style={{ paddingTop: "3rem", fontSize: "1.5rem" }}>
                    <label htmlFor="email">Email address</label>
                    <Input type="email" name="email" />
                  </div>
                  <ButtonWrapper>
                    <Link to="/register">
                      <DetailBtn>Continue</DetailBtn>
                    </Link>
                  </ButtonWrapper>
                </from>
              </div>{" "}
              <SplitLine>OR</SplitLine>
              <ButtonWrapper>
                <Link to="/checkout">
                  <ImageStyleFree
                    src={require("../../image/Social Media/facebook-logo-2019.png")}
                    alt=""
                  />
                  <DetailBtn>Continue with Facebook</DetailBtn>
                </Link>{" "}
              </ButtonWrapper>{" "}
              <ButtonWrapper>
                <ImageStyleFree
                  top="2rem"
                  src={require("../../image/Social Media/google.png")}
                  alt=""
                />
                <DetailBtn onClick={LoginByGoogleHandler}>
                  Continue with Google
                </DetailBtn>
              </ButtonWrapper>{" "}
              <div>
                By clicking Continue or Continue with Google, Facebook, or
                Apple, you agree to Etsy's Terms of Use and Privacy Policy. Etsy
                may send you communications; you may change your preferences in
                your account settings. We'll never post without your permission.
              </div>
            </CheckoutModal>
          </BackdropStyle>
        </>
      )}
      <MainContainer>
        <HeadlineWrapper>
          <DetailHeadline>
            <HeadlineItem>
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
              <HeadlineItemContent>
                <HeadlineItemTitle>LOCATION</HeadlineItemTitle>{" "}
                <HeadlineItemInfo>Taipei no.1 street</HeadlineItemInfo>
              </HeadlineItemContent>
            </HeadlineItem>
            <HeadlineItem>
              <FontAwesomeIcon icon="fa-solid fa-calendar" />
              <HeadlineItemContent>
                <HeadlineItemTitle>CALENDER</HeadlineItemTitle>{" "}
                <HeadlineItemInfo>29 April</HeadlineItemInfo>
              </HeadlineItemContent>
            </HeadlineItem>
            <HeadlineItem>
              <FontAwesomeIcon icon="fa-solid fa-users" />
              <HeadlineItemContent>
                <HeadlineItemTitle>GUESTS</HeadlineItemTitle>{" "}
                <HeadlineItemInfo>1 adults / meal</HeadlineItemInfo>
              </HeadlineItemContent>
            </HeadlineItem>
          </DetailHeadline>
        </HeadlineWrapper>
        <MainWrapper>
          <HeroWrapper>
            <MainImg src={detailProduct.image} />
            <SubImgOne src={detailProduct.image} />
            <SubImgTwo src={detailProduct.image} />
            <SubImgThree src={detailProduct.image} />
            <SubImgFour src={detailProduct.image} />

            <DetailBtn
              height="100%"
              fontSize="1rem"
              onClick={checkoutModalHandler}
            >
              checkout
            </DetailBtn>
          </HeroWrapper>
          <ContextWrapper>
            <DescriptionWrapper>
              <FoodName>{detailProduct.name}</FoodName>
              <RatingWrapper>
                <StarWrapper>
                  <FontAwesomeIcon icon="fa-solid fa-star" />
                  <FontAwesomeIcon icon="fa-solid fa-star" />
                  <FontAwesomeIcon icon="fa-solid fa-star" />
                  <FontAwesomeIcon icon="fa-solid fa-star" />
                </StarWrapper>
                <RatingText>4.0(235)</RatingText>
              </RatingWrapper>
            </DescriptionWrapper>

            <SubInfo>105台北市松山區八德路三段12巷No15號</SubInfo>
            <AllInfo>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              expedita voluptas modi? Sapiente accusamus, aperiam veniam, dolor
              facere, esse perspiciatis eveniet praesentium commodi adipisci
              fugit tempora recusandae amet quaerat nobis. Atque incidunt animi
              voluptas consectetur? Alias sint assumenda tenetur dolorem, modi,
              ab vitae error laboriosam eius in enim cupiditate voluptatem.
              Optio deserunt libero ipsam consequuntur, delectus aliquam tempora
              recusandae amet quaerat nobis. Atque incidunt animi voluptas
              consectetur? Alias sint assumenda tenetur dolorem, modi, ab vitae
              error laboriosam eius in enim cupiditate voluptatem. Optio
              deserunt libero ipsam consequuntur, delectus aliquam
            </AllInfo>
          </ContextWrapper>
        </MainWrapper>
      </MainContainer>
    </>
  );
};

export default Detail;
