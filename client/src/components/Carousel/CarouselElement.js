import styled from "styled-components";

export const CarouselLayout = styled.section`
  /* padding-top: 4rem; */
`;

export const HeadlineWrapper = styled.div`
  /* width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center; */
`;

export const Title = styled.h1`
  /* font-size: 3rem; */
`;

export const CaretContainer = styled.div`
  /* display: flex;
  gap: 1rem; */
`;

export const CaretLeft = styled.a`
  /* width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  border: 1px #aaa solid;
  position: absolute;
  left: 2rem; */
  &:hover {
    /* background-color: #222;
    border: 1px #fff solid; */
    ::after {
      /* color: #fff;
      border-right: 1rem solid #fff; */
    }
  }
  cursor: pointer;
  ::after {
    content: "";
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-90%, -50%);
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1rem solid transparent;
    border-right: 1rem solid #555; */
  }
`;
export const CaretRight = styled.a`
  /* width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  border: 1px #aaa solid;
  position: absolute;
  right: 2%;
  cursor: pointer; */
  &:hover {
    /* background-color: #666;
    border: 1px #fff solid; */
    ::after {
      /* color: #fff;
      border-left: 1rem solid #fff; */
    }
  }

  &::after {
    content: "";
    /* position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-20%, -50%);
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-left: 1rem solid #555;
    border-right: 1rem solid transparent; */
  }
`;

export const CartListContainer = styled.div`
  /* width: 90%;
  margin: 0 auto; */
`;

export const CardUl = styled.ul`
  /* margin: 2rem auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
  align-items: center; */
`;

export const CardList = styled.li`
  /* display: grid;
  grid-template-rows: 25rem 15rem; */
`;

export const ListImage = styled.img`
  /* grid-row: 1 / 2;
  background-size: cover;
  border-radius: 1rem 1rem 0 0; */
`;

export const FoodInfo = styled.div`
  /* background-color: ${(props) => props.footerColor};
  grid-row: 2 / 3;
  border-radius: 0 0 1rem 1rem;
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center; */
`;

export const FoodTitle = styled.h3`
  /* font-weight: 600;
  font-size: 3rem;
  letter-spacing: 2px; */
`;
export const FoodDescription = styled.div`
  /* font-weight: 400;
  font-size: 1.8rem;
  letter-spacing: 2px;
  padding-top: 1rem; */
`;

export const SchemeBtn = styled.button`
  /* width: 3rem;
  height: 3rem; */
`;
