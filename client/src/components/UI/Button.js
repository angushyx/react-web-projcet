import styled from "styled-components";

export const BtnStyle = styled.button`
  all: unset;

  border: 1px solid #000;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "4rem"};

  text-align: center;
  font-size: ${(props) => props.fontSize || "1.8rem"};
  font-weight: 700;
  text-transform: capitalize;

  transition: all 0.3s;

  border-radius: ${(props) => props.radius || "0"};

  &:hover {
    border: 1px solid #fff;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;

const Button = (props) => {
  return (
    <BtnStyle
      height={props.height}
      width={props.width}
      fontSize={props.fontSize}
      radius={props.radius}
    >
      {props.children}
    </BtnStyle>
  );
};

export default Button;
