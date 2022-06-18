import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import { BackdropStyle } from "../Cart/Cart";
import Input from "../UI/Input";
import { Container } from "../UI/Public";

import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { auth } from "../../slices/auth-slice";
import { BtnStyle } from "../UI/Button";

import {
  Headline,
  ContextWrapper,
  ButtonWrapper,
  DetailBtn,
  BtnGroup,
  SubImage,
} from "./DetailElement";

import {
  MainWrapper,
  HeroWrapper,
  InfoWrapper,
  MainImg,
  DescriptionWrapper,
  RatingWrapper,
  RatingText,
  FoodName,
  StarWrapper,
  TitleWrapper,
  SplitLine,
  AllInfo,
  CategoryPill,
  ImageGroup,
  CheckoutModal,
  ImageStyleFree,
} from "./DetailElement";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch(auth(result));
      navigate("/");
    } catch (error) {}
  };
  const googleFailure = async (res) => {};

  return (
    <>
      {showCheckoutModal && (
        <>
          <BackdropStyle onClick={checkoutModalHandler}>
            <CheckoutModal>
              <Headline>Go to Checkout</Headline>
              <div>
                <Link to="/review/checkout">
                  <ButtonWrapper>
                    <BtnStyle>以訪客身分購買</BtnStyle>
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
                      <BtnStyle>Continue</BtnStyle>
                    </Link>
                  </ButtonWrapper>
                </from>
              </div>{" "}
              <SplitLine>OR</SplitLine>
              <ButtonWrapper>
                <Link to="/review/checkout">
                  <ImageStyleFree
                    src={require("../../image/Social Media/facebook-logo-2019.png")}
                    alt=""
                  />
                  <BtnStyle>Continue with Facebook</BtnStyle>
                </Link>{" "}
              </ButtonWrapper>{" "}
              <ButtonWrapper>
                <ImageStyleFree
                  top="2rem"
                  src={require("../../image/Social Media/google.png")}
                  alt=""
                />
                <GoogleLogin
                  clientId="472610148148-acvlomegqtfkp1a32drp8oqaft1rnoae.apps.googleusercontent.com"
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                  render={(renderProps) => (
                    <BtnStyle onClick={renderProps.onClick}>
                      Continue with Google
                    </BtnStyle>
                  )}
                />
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
      ;
      <Container>
        <MainWrapper>
          <HeroWrapper>
            <div>
              <MainImg src={detailProduct.image} />
            </div>
            <ImageGroup>
              <SubImage src={detailProduct.image} />
              <SubImage src={detailProduct.image} />
              <SubImage src={detailProduct.image} />
              <SubImage src={detailProduct.image} />
            </ImageGroup>
          </HeroWrapper>

          <InfoWrapper>
            <ContextWrapper>
              <DescriptionWrapper>
                <TitleWrapper>
                  <FoodName>{detailProduct.name}</FoodName>{" "}
                  <CategoryPill>{detailProduct.category}</CategoryPill>
                </TitleWrapper>
                <RatingWrapper>
                  {" "}
                  <RatingText>4.0(235)</RatingText>
                  <StarWrapper>
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                  </StarWrapper>
                </RatingWrapper>
                <h1>$ {detailProduct.price}</h1>{" "}
                <AllInfo>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  expedita voluptas modi? Sapiente accusamus, aperiam veniam,
                  dolor facere, esse perspiciatis eveniet praesentium commodi
                  adipisci fugit tempora recusandae en
                </AllInfo>
              </DescriptionWrapper>{" "}
              <BtnGroup>
                <DetailBtn fontSize="1.2rem" onClick={checkoutModalHandler}>
                  加入購物車
                </DetailBtn>
                <DetailBtn fontSize="1.2rem" onClick={checkoutModalHandler}>
                  直接購買
                </DetailBtn>
              </BtnGroup>
            </ContextWrapper>
          </InfoWrapper>
        </MainWrapper>
      </Container>
    </>
  );
};

export default Detail;
