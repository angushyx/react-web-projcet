import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  CardStyle,
  Image,
  Detail,
  Name,
  PriceWrapper,
  Price,
  CardContext,
  HightLightPill,
  RatingWrapper,
  Star,
  Rating,
  Discount,
} from "./Card";

const Card = (props) => {
  const { id, image, name, price, description, category } = props;

  return (
    <CardStyle key={id}>
      <Link to={"/product/" + id}>
        <Image src={image} />
      </Link>
      <CardContext>
        <Name>{name}</Name>
        <PriceWrapper>
          <Price>$ {price}</Price>
          <Discount>$ 200.0</Discount>
          <HightLightPill>10% off</HightLightPill>
        </PriceWrapper>{" "}
        <Detail>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            rem, necessit
          </div>
        </Detail>
        <RatingWrapper>
          <Star>
            <FontAwesomeIcon icon="fa-solid fa-star" />
          </Star>{" "}
          <Rating>
            {" "}
            5.0 <span>(52)</span>
          </Rating>
          <HightLightPill color="#364fc7" bgc="#96f2d7" fontSize="1.2rem">
            {category}
          </HightLightPill>
        </RatingWrapper>
      </CardContext>
    </CardStyle>
  );
};

export default Card;
{
  /* <CartForm price={price} id={props.id} /> */
}
