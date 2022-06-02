import styled from "styled-components";
import { BtnStyle } from "../UI/Button";
import { ModalStyle } from "../Cart/Cart";
import { ImageStyle } from "../Payment/PaymentElement";

export const MainContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

export const HeadlineWrapper = styled.div`
  height: 10rem;
  background-color: #ccc;
  margin-bottom: 3rem;
`;
export const DetailHeadline = styled.ul`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeadlineItem = styled.li`
  background-color: #fff;
  width: 32%;
  height: 50%;
  font-size: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    font-size: 1.5rem;
  }
`;

export const HeadlineItemContent = styled.div`
  font-size: 2rem;

  margin-left: 2rem;
`;
export const HeadlineItemTitle = styled.strong`
  font-size: 2rem;
  @media screen and (max-width: 900px) {
    font-size: 1.8rem;
  }
  @media screen and (max-width: 700px) {
    font-size: 1.5rem;
  }
`;
export const HeadlineItemInfo = styled.h5`
  font-size: 1.2rem;
  color: #aaa;
`;

export const MainWrapper = styled.main`
  width: 80%;
  margin: 0 auto;
  height: 50vh;
`;

export const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(2, 20%);
  grid-template-rows: 1fr repeat(2, 25%);

  height: 50vh;

  padding-bottom: 4rem;
  gap: 1rem;
`;
export const ContextWrapper = styled.div``;

export const MainImg = styled.img`
  grid-column: 1/2;
  grid-row: 1/-1;
`;
export const SubImgOne = styled.img`
  grid-row: 1/2;
  grid-column: 2/3;
`;
export const SubImgTwo = styled.img`
  grid-row: 1/2;
  grid-column: 3/4;
`;
export const SubImgThree = styled.img`
  grid-row: 2/-1;
  grid-column: 2/3;
`;

export const SubImgFour = styled.img`
  grid-column: 3/4;
  grid-row: 2/3;
`;

export const DetailBtn = styled(BtnStyle)`
  align-self: flex-end;
  justify-self: center;
  border-radius: 2rem;
`;
export const ButtonWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  padding-bottom: 2rem;
  padding-top: 2rem;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  /* background-color: #ccc; */
`;
export const FoodName = styled.h1`
  font-size: 3.5rem;
  font-weight: 600;
  /* background-color: #f2f; */
  letter-spacing: 0.5rem;
`;
export const RatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: auto auto 0 3rem;
  background-color: #fff;
  font-size: 1.5rem;
`;
export const StarWrapper = styled.span``;
export const RatingText = styled.span``;

export const SubInfo = styled.div`
  margin: 0.3rem auto 3rem;
  font-size: 1.3rem;
  letter-spacing: 0.2rem;
`;
export const AllInfo = styled.div``;

export const CartField = styled.div`
  height: 100%;
  width: 100%;

  -webkit-box-shadow: 0px 3px 14px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 3px 14px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 3px 14px -3px rgba(0, 0, 0, 0.75);
`;

export const CartHeadline = styled.h2`
  font-size: 2rem;
  text-align: center;
  letter-spacing: 2;
  line-height: 2;
`;
export const ContextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const PriceStyle = styled.div`
  color: red;
  font-size: 3rem;
  line-height: 2;
  text-align: center;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 2rem 0;
`;

export const CheckoutModal = styled(ModalStyle)`
  position: relative;
  max-width: 40rem;
  margin: 3rem auto;
  padding: 3rem;
`;

export const Headline = styled.h2`
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #ccc;
`;

export const SplitLine = styled.div`
  font-size: 2rem;
  color: #888;
  text-align: center;

  ::after,
  ::before {
    content: "";
    position: absolute;
    right: 0;
    transform: translateY(1.1rem);
    height: 0rem;
    width: 45%;
    border-bottom: 1px solid #aaa;
  }
  ::before {
    left: 0;
  }
`;

export const ImageStyleFree = styled(ImageStyle)`
  position: absolute;
  transform: translate(50%, 20%);
`;

//  &::after {
//     content: "⨉";
//     position: absolute;
//     height: 3rem;
//     width: 3rem;
//     top: -5rem;
//     right: 0;
//     font-size: 3rem;

//     display: flex;
//     align-items: center;
//     justify-content: center;
//     transition: 0.1s ease-in-out;

//     color: #fff;

//     border-radius: 50%;
//   }
//   :hover::after {
//     height: 3.5rem;
//     width: 3.5rem;
//     background-color: #ccc;
//     cursor: pointer;
//   }
