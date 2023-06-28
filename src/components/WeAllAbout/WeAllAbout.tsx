import React from "react";
import {
  WeAllAboutContainer,
  TitleContainer,
  Title,
  ContentContainer,
  Image,
  LinkContainer,
  Link,
} from "./WeAllAboutX.styles";
import tiledimg from "./images/tiledimg.png";

export default function WeAllAbout(): JSX.Element {
  return (
    <WeAllAboutContainer>
      <TitleContainer>
        <Title>
          What are <br />
          <span>we all about</span>
        </Title>
      </TitleContainer>

      <ContentContainer>
        <Image src={tiledimg} alt="Tiled Images" />

        <LinkContainer>
          <Link href="#about">About</Link>
          <Link href="#careers">Careers</Link>
        </LinkContainer>
      </ContentContainer>
    </WeAllAboutContainer>
  );
}
