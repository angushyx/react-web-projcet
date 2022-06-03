import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../UI/Card";
import { useSelector } from "react-redux";

import { MealSection, Title, Warp } from "./Meal";

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
    />
  ));

  return (
    <>
      <MealSection>
        <Title>Save your cooking time and health</Title>
        <Warp>{mealList}</Warp>
      </MealSection>
    </>
  );
};

export default Meal;

//  <Sticky>
//    <FilterContainer>
//      <FilterMain>
//        <FilterMainLeft>
//          <button>OFF</button>
//          <span>FREE CURBSIDE PICKUP</span>
//          <FilterIcon>
//            <FontAwesomeIcon icon="fa-solid fa-filter" />
//            <span>Filter</span>
//          </FilterIcon>
//        </FilterMainLeft>
//        <Detail2>
//          <span>115 Items</span>&nbsp;&nbsp;&nbsp;&nbsp;
//          <span>MOST RELEVANT</span>&nbsp;&nbsp;&nbsp;
//          <FontAwesomeIcon icon="fa-solid fa-caret-down" />
//        </Detail2>
//      </FilterMain>
//    </FilterContainer>
//  </Sticky>;
