import styled from "styled-components";

export const MainContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;

export const Main = styled.main`
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 1rem;
  height: 80vh;
`;

export const Sidebar = styled.aside`
  background-color: #eee;
  grid-column: 1/2;
  overflow-y: scroll;
  height: 50rem;
`;

export const UnorderedList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 1rem;
  font-size: large;
`;

export const CategoryList = styled.li`
  font-size: 1.2vw;
  line-height: 2;
  margin: 1rem;
  letter-spacing: 0.009rem;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid #333;
  }
`;

export const Commodity = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  grid-column: 2/3;
  overflow-y: scroll;
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
