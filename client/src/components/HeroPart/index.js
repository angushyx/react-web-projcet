import React from "react";
import Button from "../UI/Button";
import { Link } from "react-router-dom";

import { HeroSection, Wrapper, Title, Headline } from "./HeroElement";

const Hero = () => {
  return (
    <HeroSection>
      <Wrapper>
        <Title>WELCOME TO SEAFOOD</Title>
        <Headline>
          A healthy and organic ingredients delivered directly from the village.
        </Headline>
        <Link to="shop">
          <Button width="18rem" radius="1rem">
            shop now
          </Button>
        </Link>
      </Wrapper>
    </HeroSection>
  );
};

export default Hero;
