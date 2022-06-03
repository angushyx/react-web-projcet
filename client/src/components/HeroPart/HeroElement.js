import styled from "styled-components";

export const HeroSection = styled.section`
  height: 40vh;

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

export const Title = styled.h1`
  font-size: 2.8rem;
  color: var(--color-grey-dark-1);
  margin-top: 1.5rem;
  font-weight: 500;
`;

export const Headline = styled.h2`
  font-weight: 400;
  font-size: 2rem;
  margin: 1.5rem 5rem 2rem 5rem;
  color: var(--color-grey-dark-1);
`;
