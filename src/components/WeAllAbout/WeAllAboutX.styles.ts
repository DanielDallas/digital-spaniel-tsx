import styled from "styled-components";

export const WeAllAboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TitleContainer = styled.div`
  flex: 1 1 100%;
  padding: 4rem 8rem;

  @media (min-width: 1024px) {
    flex-basis: 50%;
    padding: 3rem 8rem 1rem 8rem;
  }

  @media (min-width: 300px) and (max-width: 600px) {
    padding: 3rem 1rem 0.5rem 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  color: #111827;

  @media (min-width: 800px) {
    font-size: 2.6rem;
  }

  span {
    color: rgba(51, 51, 51, 0.75);
    font-weight: 400;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  background-color: #f5f5f5;
  padding: 4rem 8rem;

  @media (min-width: 1024px) {
    padding: 2rem 8rem;
  }

  @media (min-width: 300px) and (max-width: 600px) {
    padding: 1rem;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 40px;

  @media (min-width: 300px) and (max-width: 600px) {
    padding: 10px 5px;
  }

  @media (min-width: 1024px) {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

export const LinkContainer = styled.p`
  margin-top: -24px;
  margin-bottom: 16px;
  padding-bottom: 10px;

  @media (min-width: 640px) {
    margin-top: -16px;
    margin-bottom: 16px;
  }

  @media (min-width: 1024px) {
    margin-top: -24px;
    margin-bottom: 16px;
  }
`;

export const Link = styled.a`
  margin-right: 1.5rem;
  font-size: 14px;
  font-weight: 600;
  color: #333333;
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 8px;
  text-decoration-color: #c0345e;
  cursor: pointer;

  &:hover {
    text-decoration-style: dotted;
  }
`;
