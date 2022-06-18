import React from "react";
import { Section, Container } from "../UI/Public";
import { CardWrapper } from "./Subscription";

const Subscription = () => {
  return (
    <Section>
      <CardWrapper>
        <div>
          <h1>Basic</h1>
          <h2>$ 999</h2>
        </div>
        <div>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea atque,
              placeat, vero iure quod quos, at ipsam quasi dolorum illum
              excepturi corrupti ad non ducimus cum consequuntur optio minus
              delectus?
            </li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </CardWrapper>
    </Section>
  );
};

export default Subscription;
