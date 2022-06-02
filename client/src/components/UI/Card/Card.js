import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Image = styled.img`
  width: 100%;
  height: 22vh;
  -webkit-box-shadow: -6px 0px 22px -14px rgba(0, 0, 0, 1);
  -moz-box-shadow: -6px 0px 22px -14px rgba(0, 0, 0, 1);
  box-shadow: -6px 0px 22px -14px rgba(0, 0, 0, 1);
  transition: 0.004 all;

  border-radius: 2rem;
  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;
export const Detail = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Name = styled.div`
  font-size: 2rem;
`;

export const Price = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
