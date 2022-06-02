import styled from "styled-components";

const BtnContainer = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  position: sticky;
  background-color: #222;
  bottom: 10%;
  left: 100%;
  border-radius: 50%;
  &::after {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    top: 50%;
    left: 50%;
    transform: translate(0%, -30%);
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid #fff;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
  }
  :hover {
    background-color: #000;
    &::after {
      border-bottom: 1rem solid #fff;
    }
  }
`;

const ToTopBtn = () => {
  function toTopHandler() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return <BtnContainer onClick={toTopHandler} />;
};

export default ToTopBtn;
