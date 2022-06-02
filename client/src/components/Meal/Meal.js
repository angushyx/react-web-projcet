import styled from "styled-components";

export const MealSection = styled.section`
  max-width: 90%;
  margin: 0 auto;
`;

export const Title = styled.h5`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 3rem;
  padding: 2rem;

  text-align: center;
  letter-spacing: 0.2rem;
  transition: all 0.3s;
`;

export const Warp = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  grid-row-gap: 4rem;
  justify-content: center;
  @media screen and (min-width: 400px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Sticky = styled.div`
  position: sticky;
  padding: 1rem 0 0.5rem 0;
  font-size: 1.5rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
export const FilterMain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  min-height: 2.4rem;
  border-bottom: 1px solid #eee;
  border-top: 1px solid #eee;
`;
export const FilterMainLeft = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const FilterIcon = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Detail2 = styled.span`
  display: flex;
  align-items: center;
`;
