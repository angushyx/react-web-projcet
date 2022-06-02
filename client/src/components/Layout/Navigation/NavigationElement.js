import styled from "styled-components";

export const Header = styled.header`
  /* position */

  top: 0;
  height: 8rem;
  /* flexBox */
  display: flex;
  align-items: center;

  background-color: #fff;
  opacity: 0.9;

  z-index: 20;
`;

export const Wrapper = styled.nav`
  /* flexBox */
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 2rem;

  width: 90%;
  height: 100%;
  margin: 0 auto;
`;

export const LeftNav = styled.div`
  gap: 2rem;
  font-size: 2rem;
  transition: 1s all;
  cursor: pointer;
  @media screen and (min-width: 586px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 786px) {
    font-size: 2rem;
  }
`;

export const Search = styled.form`
  display: none;

  @media screen and (min-width: 600px) {
    flex: 0 0 40%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Input = styled.input`
  font-size: inherit;
  border-radius: 10rem;
  border: none;
  padding: 0.6rem 3rem;
  width: 90%;
  background-color: #eee;
  transition: all 0.2s;
  margin-right: -3.5rem;

  &:focus {
    outline: none;
    width: 100%;
  }
  &::-webkit-input-placeholder {
    font-weight: 100;
    color: #999;
  }
`;
export const SearchBtn = styled.button`
  border: none;
  font-size: inherit;

  &:focus {
    outline: none;
  }

  &:active {
    transform: translateY(2px);
  }
`;
export const IconStyle = styled.div`
  height: 2rem;
  width: 2rem;
  opacity: 0.6;
`;

export const LogoWrapper = styled.div``;

export const Logo = styled.div`
  width: 5rem;
  height: 5rem;
  @media screen and (min-width: 600px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const UserNav = styled.nav`
  height: inherit;
  display: flex;
  align-items: center;
`;

export const UserImage = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 11rem;
  height: 4rem;
  border-radius: 50%;
`;

export const Ul = styled.ul`
  display: flex;
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
  }
`;
export const Li = styled.li`
  cursor: pointer;
  @media screen and (min-width: 600px) {
    display: block;
    font-size: 2.4rem;
    padding: 0 1.5rem;
  }
`;
export const Li2 = styled.li`
  display: block;
  font-size: 3rem;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const Image = styled.img`
  border-radius: 50%;
`;

export const CartIcon = styled.div`
  display: none;
  position: relative;
  @media screen and (min-width: 600px) {
    display: block;
    position: relative;
  }
`;

export const Hamburger = styled.div`
  font-size: 3rem;
  @media screen and (min-width: 600px) {
    display: none;
  }
`;

export const Notification = styled.span`
  position: absolute;
  top: -1.3rem;
  left: 1.5rem;
  height: 2rem;
  width: 2rem;
  z-index: 99;

  font-size: 2rem;
  background-color: #ee1e;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
`;

/***media query
 *
 *
 *
 *
 *
 *
 *
 * ****/
