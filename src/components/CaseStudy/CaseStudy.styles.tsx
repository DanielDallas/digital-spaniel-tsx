import styled from "styled-components";

export const CaseStudiesContainer = styled.div`
  width: 100%;
`;

export const CaseStudiesContent = styled.div`
  padding: 2.5rem 2rem;

  @media (min-width: 640px) {
    padding: 5rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 5rem 12rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  color: #111827;
  text-align: center;
`;

export const Description = styled.p`
  width: 100%;
  text-align: center;
  color: #4b5563;
  margin-top: 1.5rem;
  font-size: 1rem;
  line-height: 1.6rem;

  @media (min-width: 1024px) {
    width: auto;
    padding: 0 16rem;
    font-size: 1rem;
    line-height: 1.75rem;
  }
`;

export const Background = styled.div`
  width: 100%;
  background-color: #edf2f7;
  padding: 1.5rem 2rem;

  @media (min-width: 1024px) {
    padding: 1.5rem 12rem;
  }
`;
