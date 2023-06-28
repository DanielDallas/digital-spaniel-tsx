import React from "react";
import {
  Container,
  ContentWrapper,
  BrandLabel,
  Heading,
  Subheading,
  Description,
  Button,
  HeroImage,
} from "./Hero.styles";
import herobg from "./images/hero.png";

const Hero = () => {
  return (
    <Container>
      <ContentWrapper>
        <div>
          <div>
            <BrandLabel>BRAND, DEV, ECOM, MARKETING</BrandLabel>
          </div>
          <Heading>
            We unleash <br />
            <Subheading>business potential</Subheading>
          </Heading>
          <Description>
            We create brand experiences which are memorable and distinct. Our
            experienced team create and develop brands with personality and
            resonance.
          </Description>
          <div>
            <Button href="#getintouch">Let's Talk</Button>
          </div>
        </div>
      </ContentWrapper>

      <div>
        <HeroImage src={herobg} alt="HeroImg" />
      </div>
    </Container>
  );
};

export default Hero;
