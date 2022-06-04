import styled from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "../../../MediaQuery/MediaQuery";

export const Header = styled.header`
  position: sticky;
  height: 5rem;
  background-color: var(--color-grey-light-1);
  bottom: 0;
  @media ${devices.mobileL} {
    display: none;
  }
`;

export const Wrapper = styled.nav`
  /* flexBox */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;

  width: 90%;
  max-width: 34rem;
  height: 100%;
  margin: 0 auto;
`;

export const LeftNav = styled.div`
  /* gap: 2rem;
  font-size: 2rem;
  transition: 1s all;
  cursor: pointer;
  @media screen and (min-width: 586px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 786px) {
    font-size: 2rem;
  } */
`;

export const IconStyle = styled.div`
  position: ${(props) => props.position || "relative"};
  top: ${(props) => props.top || "auto"};
  right: ${(props) => props.right || "auto"};
  color: ${(props) => props.color || "var(--color-grey-dark-2)"};
  font-size: ${(props) => props.fontSize || "auto"};
  height: ${(props) => props.height || "3.7rem"};
  width: ${(props) => props.width || "3.7rem"};

  border-radius: ${(props) => props.radius || "0"};

  background: ${(props) => props.bgc || "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  :hover {
    ::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      height: 3.7rem;
      width: 3.7rem;
      background-color: var(--color-primary);
      z-index: -1;
    }
  }
`;

export const LinkStyle = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;
  align-self: center;
  width: 4rem;
  :active,
  :hover {
    border-top: 0.3rem solid #222;
  }
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.div`
  /* width: 5rem;
  height: 5rem;
  @media screen and (min-width: 600px) {
    width: 4rem;
    height: 4rem;
  } */
`;

export const UserNav = styled.nav`
  /* height: inherit;
  display: flex;
  align-items: center; */
`;

export const UserImage = styled.div`
  /* display: flex;
  align-items: center;
  gap: 1rem;
  width: 11rem;
  height: 4rem;
  border-radius: 50%; */
`;

export const Ul = styled.ul`
  /* display: flex;
  align-items: center;
  height: 100%;

  @media screen and (min-width: 600px) {
    height: 100%;
    justify-content: space-between;
    & > *:hover {
      display: flex;
      align-items: center;
      height: inherit;
      background-color: #eee;
    }
  } */
`;
export const Li = styled.li`
  /* cursor: pointer;
  @media screen and (min-width: 600px) {
    display: block;
    font-size: 2.4rem;
    padding: 0 1.5rem;
  } */
`;
export const Li2 = styled.li`
  /* display: block;
  font-size: 3rem;
  @media screen and (min-width: 600px) {
    display: none;
  } */
`;

export const Image = styled.img`
  /* width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  border-radius: ${(props) => props.radius || "50%"}; */
`;

export const CartIcon = styled.div`
  /* display: none; */
  position: relative;
  /* @media screen and (min-width: 600px) {
    display: block;
    position: relative;
  } */
`;

export const Notification = styled.span`
  position: absolute;
  top: -0.5rem;
  right: 0;

  height: 1.4rem;
  width: 1.4rem;
  z-index: 99;

  font-size: 1.2rem;
  background-color: var(--color-primary-dark);

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
`;
