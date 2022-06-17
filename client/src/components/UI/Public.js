import styled from "styled-components";
import { devices } from "../../MediaQuery/MediaQuery";

export const Section  = styled.section`
    height: ${props=>props.higher ? "50rem":"45rem"};
    margin: 4rem auto;

    @media ${devices.mobileL} {
        height: ${props=>props.higher ? "50rem":"40rem"};
    }
    @media ${devices.laptop} {
        height: ${props=>props.higher ? "50rem":"22rem"};
    }
`


export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
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
    background: ${(props) => props.hBgc || "none"};
    ::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      height: 3.7rem;
      width: 3.7rem;
      background: ${(props) => props.hoverBgc || "var(--color-primary)"};
      z-index: -1;
    }
  }
`;