import styled from "styled-components";
import { BtnStyle } from "../UI/Button";
import { ModalStyle } from "../Cart/Cart";
import { ImageStyle } from "../Payment/PaymentElement";
import { devices } from "../../MediaQuery/MediaQuery";

export const MainContainer = styled.div`
  height: 93vh;
`;

export const HeadlineWrapper = styled.div`
  height: 10rem;
  background: var(--color-primary-light);
  margin-bottom: 3rem;
`;
export const DetailHeadline = styled.ul`
  height: 100%;
  width: 95%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  @media ${devices.mobileL} {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HeadlineItem = styled.li`
  background: var(--color-grey-light-1);
  width: 40%;
  height: 80%;
  font-size: 1.5rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 1rem;

  @media ${devices.mobileL} {
    background-color: var(--color-grey-light-1);
    width: 32%;
    height: 50%;
    font-size: 2rem;
    gap: 0;

    flex-direction: row;
  }
`;

export const HeadlineItemContent = styled.div`
  font-size: 1rem;
  @media ${devices.mobileL} {
    font-size: 2rem;
    margin-left: 1rem;
  }
`;
export const HeadlineItemTitle = styled.strong`
  font-size: 1.3rem;
  color: var(--color-grey-dark-1);
  @media ${devices.mobileL} {
    font-size: 1.5rem;
  }
`;
export const HeadlineItemInfo = styled.h5`
  font-size: 1.2rem;
  color: var(--color-grey-dark-2);
`;

export const MainWrapper = styled.main`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr repeat(2, 20%);
  grid-template-rows: 1fr repeat(2, 25%);

  height: 20rem;
  padding-bottom: 1.5rem;
  gap: 0.5rem;

  @media ${devices.mobileL} {
    padding-bottom: 2rem;
  }
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
  width: 100%;
`;
export const ButtonWrapper = styled.div`
  position: relative;
  width: 100%;
  padding: 1.5rem 0;
  font-size: 0.5rem;
  @media ${devices.mobileL} {
    margin: 0 auto;
    width: 90%;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FoodName = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  /* background-color: #f2f; */
  letter-spacing: 0.2rem;
  @media ${devices.mobileL} {
    font-size: 3.5rem;
  }
`;
export const RatingWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 1rem auto 0 0;
  background-color: #fff;
  font-size: 1.5rem;
`;
export const StarWrapper = styled.span``;
export const RatingText = styled.span``;

export const SubInfo = styled.div`
  margin: 0.3rem auto 1rem;
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
  border-bottom: 1px solid var(--color-grey-light-4);
  @media ${devices.mobileL} {
  }
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
  transform: translate(40%, 20%);
  top: 20%;
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
