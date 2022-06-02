import { Link } from "react-router-dom";
import CartForm from "../CartForm";

import { CardStyle, Image, Detail, Name, Price, CardWrapper } from "./Card";

const Card = (props) => {
  const { id, image, name, price } = props;

  return (
    <CardStyle key={id}>
      <Link to={"/product/" + id}>
        <Image src={image} />
      </Link>
      <CardWrapper>
        <Detail>
          <Name>{name}</Name>
          <Price>$ {price}</Price>{" "}
        </Detail>
        <CartForm price={price} id={props.id} />
      </CardWrapper>
    </CardStyle>
  );
};

export default Card;
