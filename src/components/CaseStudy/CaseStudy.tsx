import React from "react";
import {
  CaseStudiesContainer,
  CaseStudiesContent,
  Title,
  Description,
} from "./CaseStudy.styles";

export default function CaseStudies(): JSX.Element {
  return (
    <CaseStudiesContainer>
      <CaseStudiesContent>
        <Title>Case Studies</Title>
        <Description>
          Every project is different. We like to work collaboratively with our
          clients, tailoring each project to suit the needs of you and your
          business.
        </Description>
      </CaseStudiesContent>
    </CaseStudiesContainer>
  );
}
