import styled from "styled-components";
import { devices } from "../../MediaQuery/MediaQuery";

export const Wrapper = styled.div`
  width: 40rem;
  height: 100vh;
  margin: 0 auto;
`;

export const Headline = styled.h1``;
export const SignupCard = styled.div`
  width: 100%;
  height: 70%;
  margin: auto 0;
  transform: translateY(15%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: 2px 4px 15px -8px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 2px 4px 15px -8px rgba(0, 0, 0, 0.38);
  box-shadow: 2px 4px 15px -8px rgba(0, 0, 0, 0.38);
`;
export const From = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
