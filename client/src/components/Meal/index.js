import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../UI/Card";
import { useSelector } from "react-redux";

import {  Title, Warp } from "./Meal";
import { Container,Section } from "../UI/Public";


const Meal = () => {
  const commodityReducer = useSelector((state) => state.commodityReducer);
  const commodityList = commodityReducer.commodity;

  const mealList = commodityList.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      name={item.name}
      price={item.price}
      image={item.image}
      description={item.description}
      category={item.category}
      amount={item.amount}
    />
  ));

  return (
    <>
    <Container>
      <Section higher>
        <Title>熱門餐點</Title>
        <Warp>{mealList}</Warp>
      </Section>
    </Container> 
    </>
  );
};

export default Meal;

