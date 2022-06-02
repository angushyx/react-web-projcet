import styled from "styled-components";

// import Modal from "../UI/Modal";
export const BackdropStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ModalStyle = styled.div`
  position: fixed;

  width: 90%;
  height: 60rem;
  margin: 0 auto;
  background-color: #fff;
  align-items: center;
  left: 5%;
  z-index: 99;
  -webkit-box-shadow: -1px 3px 5px 0px rgba(255, 255, 255, 1);
  -moz-box-shadow: -1px 3px 5px 0px rgba(255, 255, 255, 1);
  box-shadow: -1px 3px 5px 0px rgba(255, 255, 255, 1);

  /* opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")}; */
  /* top: ${({ isOpen }) => (isOpen ? "10%" : "30%")}; */

  transition: 0.3s ease-in-out;
  border-radius: 1.5rem;
`;
export const Headline = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  /* margin: 0 4rem; */
  padding: 3rem 0;
  font-size: 3rem;
  color: #888;
  width: 90%;
  margin: 0 auto;
`;

export const CartItemWrapper = styled.div`
  height: 40rem;
  width: 90%;
  overflow: scroll;
  border-bottom: 1px solid #999;
  margin: 0 auto;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  gap: 2rem;
`;
export const List = styled.li`
  font-size: 2rem;
  line-height: 1.3;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: 8rem;
  height: 8rem;
`;

export const Name = styled.div`
  font-size: 2rem;
  line-height: 4;
  color: #133;
`;

export const Price = styled.div`
  display: flex;
  justify-content: flex-end;
  font-weight: 600;
  align-items: center;
`;

//BOTTOM FIELD
export const CartBottom = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TotalPrice = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  line-height: 2;
  font-size: 2rem;
  color: #555;
`;

export const Reminder = styled.div`
  font-size: 1rem;
  text-align: center;
  color: #555;
`;

export const CheckBtn = styled.button`
  all: unset;

  border: 1px solid #fff;
  width: 14rem;
  height: 2rem;
  background-color: #000;
  color: #fff;

  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;

  margin-top: 1.2rem;

  transition: all 0.3s;
  &:hover {
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }
`;
export const Amount = styled.span`
  font-size: 3rem;
`;

export const EmptyCart = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70%;
`;
