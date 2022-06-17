import styled from "styled-components";
import { devices } from "../../MediaQuery/MediaQuery";

export const IntroWrapper=styled.div`
    display: grid;
    grid-template-rows: 1fr,20rem;
    gap: 2rem;
    justify-items: center;
    align-items: flex-end;
    @media ${devices.tablet} {
        grid-template-columns: repeat(12,1fr);
        padding-top: 8rem;
    }
    @media ${devices.laptop} {
        grid-template-columns: repeat(12,1fr);
        padding-top: 0
    }


`
export const ImageWrapper =styled.div`
    grid-column:2/6 ;
    width: 90%;
    @media ${devices.mobileL} {
       width:60%;
    }
    @media ${devices.tablet} {
        width:100%;
        padding-top:5rem;
    }
 
`
export const TextWrapper =styled.div`
    grid-column:7/-1 ;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height:80%;

    @media ${devices.mobileL} {
      font-size: 1.5rem;
    }
    @media ${devices.tablet} {
        height:65%;
    }
    @media ${devices.laptop} {
        height:50%;
        grid-column:6/-1 ;
    }

`
export const TextStyle =styled.p`
  margin-bottom: 2rem;
`
