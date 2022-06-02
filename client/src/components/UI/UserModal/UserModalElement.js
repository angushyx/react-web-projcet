import styled from "styled-components";

export const DetailBox = styled.ul`
  height: 35rem;
  width: 25rem;
  background-color: #000;
  position: absolute;
  top: 8.3rem;
  right: 0;
  border-radius: 0.3rem;

  &:not(:first-child) {
    font-size: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  & > * {
    height: 15%;
    width: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    &:hover {
      background-color: #555;
    }
  }

  @media screen and (min-width: 600px) {
    width: 30rem;
    right: 17rem;
  }
`;

export const UserInfoWrapper = styled.li`
  width: 100%;
  justify-content: center;

  margin: 1rem auto;

  gap: 2rem;

  height: 20%;
  font-size: 1.5rem;
  border-bottom: 1px solid #fff;
  > div {
    font-size: 2.5rem;
  }
  ::after {
    content: "";
    position: absolute;
    height: 0;
    width: 0;

    top: -2rem;
    right: 2rem;
    border-bottom: 1rem solid #000;
    border-left: 1rem solid transparent;
    border-top: 1rem solid transparent;
    border-right: 1rem solid transparent;
  }
`;

export const UserName = styled.h3`
  line-height: 2;
`;

export const SettingWrapper = styled.li`
  padding-left: 3rem;
  gap: 1rem;
`;
export const LanguageWrapper = styled.li`
  padding-left: 3rem;
  gap: 1rem;
`;
export const SubscriptionWrapper = styled.li`
  padding-left: 3rem;
  gap: 1rem;
`;
export const LogoutWrapper = styled.li`
  padding-left: 3rem;
  gap: 1rem;
`;
