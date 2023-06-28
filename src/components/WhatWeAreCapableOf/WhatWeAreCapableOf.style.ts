import styled from "styled-components";

export const CapabilitiesContainer = styled.div`
  padding: 6rem 3rem 5rem 8rem;
  right: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;

  @media (min-width: 300px) and (max-width: 600px) {
    padding: 3rem 0.5rem;
    display: inherit;
  }
`;

export const CapabilitiesContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (min-width: 300px) and (max-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
`;

export const CapableOf = styled.div`
  @media (min-width: 800px) {
    right: 0px;
    display: flex;
    gap: 3rem;
    width: 50%;
  }

  @media (max-width: 600px) {
    margin-top: 1.3rem;
    display: flex;
    gap: 3rem;
    width: 100%;
    padding-bottom: 3rem;
  }
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
  font-weight: 100;
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

  @media (min-width: 300px) and (max-width: 600px) {
    margin-bottom: 3rem;
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
