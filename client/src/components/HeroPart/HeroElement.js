import styled from "styled-components";

export const HeroSection = styled.section`
  height: 40vh;
  border-bottom: 1px #000 solid;
  background-image: linear-gradient(
      333deg,
      rgba(0, 0, 0, 0.2),
      rgba(251, 233, 233, 0.9)
    ),
    url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");

  background-size: cover;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 3.3rem;
  color: #030303;
  margin: 0 0 3rem 0;
  font-weight: 600;
`;

export const Headline = styled.div`
  font-weight: 500;
  font-size: 2.5rem;
  padding-right: 0rem;
  margin: 0 0 3rem 0;
`;
