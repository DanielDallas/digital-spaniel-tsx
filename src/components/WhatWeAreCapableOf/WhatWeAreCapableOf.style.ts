import styled from "styled-components";

export const CapabilitiesContainer = styled.div`
  padding: 6rem 3rem 5rem 8rem;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

export const CapabilitiesContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CapableOf = styled.div`
  @media (min-width: 800px) {
    padding:;
    right:0px;
    display: flex;
    gap: 3rem;
    width: 50%;

`;

export const SectionTitle = styled.h1`
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

export const SectionText = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.6rem;
  color: #4b5563;
  font-weight: 100;
  opacity: 1;
  max-width: 24rem;

  @media (min-width: 800px) {
    padding-right: 5rem;
    font-size: 1rem;
  }
`;

export const ButtonLinks = styled.a`
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
`;

export const Link = styled.a`
  font-size: 0.94rem;
  font-weight: 400;
  line-height: 1.9;
  color: #333333;
  text-decoration: none;

  &:hover {
    color: #c0345e;
  }
`;