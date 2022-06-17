import styled from "styled-components";
import { devices } from "../../MediaQuery/MediaQuery";


export const HeadlineWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;



export const CaretLeft = styled.a`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  border: 1px #aaa solid;
  position: absolute;
  left: -3%;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    background-color: #222;
    border: 1px var(--color-grey-light-2) solid;
    ::after {
      color: var(--color-grey-light-2);
      border-right: 0.5rem solid var(--color-grey-light-2);
    }
  }
  cursor: pointer;
  ::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-90%, -50%);
    width: 0;
    height: 0;
    border-top: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid #555;
  }
`;
export const CaretRight = styled(CaretLeft)`
  left: auto;
  right: -3%;
  cursor: pointer;
  &:hover {
    ::after {
      border-right: 0.5rem solid transparent;
      border-left: 0.5rem solid var(--color-grey-light-2);
    }
  }
  &::after {
    content: "";
    transform: translate(-20%, -50%);
    border-right: 0.5rem solid transparent;
    border-left: 0.5rem solid #555;
  }
`;



export const CardUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  margin-bottom: 4rem;
  gap: 2rem;
`;

export const CardList = styled.li`
  width: 10rem;
  height: 10rem;
  @media ${devices.mobileL} {
    width: 12rem;
    height: 12rem;
  }
  @media ${devices.tablet} {
    width: 14rem;
    height: 14rem;
  }
  @media ${devices.laptop} {
    width: 16rem;
    height: 16rem;
  }
  @media ${devices.laptopL} {
    width: 20rem;
    height: 20rem;
  } ;
`;

export const ListImage = styled.img`
  background-size: cover;

  border-radius: 1rem;
  :hover {
    opacity: 0.3;
    cursor: pointer;
  }
`;

export const FoodInfo = styled.div`
  background: ${(props) => props.footerColor};
  grid-row: 2 / 3;
  border-radius: 0 0 1rem 1rem;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

export const FoodTitle = styled.h3`
  font-weight: 600;
  font-size: 3rem;
  letter-spacing: 2px;
`;
export const FoodDescription = styled.div`
  font-weight: 400;
  font-size: 1.8rem;
  letter-spacing: 2px;
  padding-top: 1rem;
`;

export const SchemeBtn = styled.button`
  width: 3rem;
  height: 3rem;
`;
