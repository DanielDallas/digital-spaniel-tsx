import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  right: 0px;
`;

export const ContentWrapper = styled.div`
  @media (min-width: 800px) {
    padding: 13rem 4rem 4rem 8rem;
    right:0px;
    display: flex;
    gap: 3rem;
    width: 50%:
  }

  padding:10rem 1rem 5rem 1rem;
`;

export const BrandLabel = styled.div`
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  color: #c0345e;
  opacity: 0.75;
`;

export const Heading = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  color: #111827;

  @media (min-width: 800px) {
    font-size: 2.6rem;
  }
`;

export const Subheading = styled.span`
  font-weight: 400;
  color: rgba(17, 24, 39, 0.75);
`;

export const Description = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.6rem;
  color: #000000;
  font-weight: 100;
  opacity: 0.8;
  max-width: 24rem;

  @media (min-width: 800px) {
    padding-right: 5rem;
    font-size: 1rem;
  }
`;

export const Button = styled.a`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: #111827;
  text-decoration: underline;
  text-underline-offset: 8px;
  text-decoration-color: #c0345e;
  text-decoration-thickness: 0.16em;

  &:hover {
    text-decoration-style: dotted;
  }

  @media (min-width: 300px) and (max-width: 700px) {
    margin-top: 6rem;
  }
`;

export const HeroImage = styled.img`
  width: 50%;
  height: auto;
  position: absolute;
  right: -0.06rem;
  top: -1rem;
  border-radius: 0px 0px 0px 85px;
  //   z-index: 1;

  @media (min-width: 300px) and (max-width: 750px) {
    display: none;
  }
`;
