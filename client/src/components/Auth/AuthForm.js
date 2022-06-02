import styled from "styled-components";

export const Wrapper = styled.div`
  width: 40rem;
  height: 55rem;
  margin: 0 auto;
`;

export const Headline = styled.h1`
  margin-top: 2rem;
`;
export const SignupCard = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 600px) {
    background-color: rgba(251, 233, 233, 0.7);
    -webkit-box-shadow: 2px 4px 15px -8px rgba(0, 0, 0, 0.38);
    -moz-box-shadow: 2px 4px 15px -8px rgba(0, 0, 0, 0.38);
    box-shadow: 2px 4px 15px -8px rgba(0, 0, 0, 0.38);
  }
`;
export const From = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FacebookBtn = styled.button`
  all: unset;

  margin-top: 1rem;
  border: 1px solid #fff;
  width: 18rem;
  height: 4rem;
  background-color: #5c79ff;
  color: #fff;

  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;

  transition: all 0.3s;
  &:hover {
    border: 1px solid #fff;
    background-color: #5c79ff;
    color: #fff;
    cursor: pointer;
  }
`;
export const GoogleBtn = styled.button`
  all: unset;

  margin-top: 1rem;
  border: 1px solid #fff;
  width: 18rem;
  height: 4rem;
  background-color: #fff;
  color: #000;

  text-align: center;
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;

  transition: all 0.3s;
  &:hover {
    border: 1px solid #fff;
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`;

export const ChangeModeBtn = styled.button`
  all: unset;

  margin-top: 1rem;
  border: 1px solid #fff;
  width: 18rem;
  height: 4rem;
  background-color: #e777ee;
  color: #000;

  text-align: center;
  font-size: 1rem;

  text-transform: uppercase;

  transition: all 0.3s;
  &:hover {
    border: 1px solid #fff;
    background-color: #aaa;
    color: #fff;
    cursor: pointer;
  }
`;
