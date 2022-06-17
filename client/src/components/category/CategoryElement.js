import styled from "styled-components";
import { devices } from "../../MediaQuery/MediaQuery";

export const CategoryUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 1.2rem;
  @media ${devices.mobileL} {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  @media ${devices.laptop} {
    grid-template-columns: repeat(6, 1fr);
 
  }
`;

export const CategoryList = styled.li`
  max-width: 20rem;
  @media ${devices.laptop} {
    max-width: 100%;
    }

`;
export const CategoryWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  :hover > div {
    opacity: 1;
    transition: opacity 0.2s ease-in;
  }
`;
export const CategoryText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.5rem;
  opacity: 0;
  font-weight: 700;
  @media ${devices.laptop} {
    font-size: 2.4rem;
  }
`;
