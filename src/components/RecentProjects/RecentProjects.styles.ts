import styled, { css } from "styled-components/macro";

export const RecentProjectsContainer = styled.div`
  padding: 2rem 8rem;
  width: 70%;

  @media (min-width: 300px) and (max-width: 600px) {
    padding: 1rem;
    width: 65%;
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  color: #111827;

  @media (min-width: 300px) and (max-width: 600px) {
    font-size: 1.9rem;
  }
`;

export const Tabs = styled.div`
  @media (min-width: 300px) and (max-width: 600px) {
    width: 100%;
  }
`;

export const TabsHeader = styled.div`
  display: flex;
  justify-content: ;
  width: 60%;
  border-bottom: 0.03rem solid;
  gap: 2rem;
  border-bottom-color: #cccfd0;
  margin-bottom: 1rem;

  @media (min-width: 300px) and (max-width: 600px) {
    width: 100%;
    gap: 1rem;
  }
`;

export const Tab = styled.button<{ active: boolean }>`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => (props.active ? "#1f2937" : "#64748b")};
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 0.6s ease-in-out;

  ${(props) =>
    props.active &&
    css`
      border-bottom: 3px solid #c0345e;
    `}

  &:hover {
    color: #1f2937;
  }

  @media (min-width: 300px) and (max-width: 600px) {
    font-size: 0.9rem;
    padding: 0.5rem 0.8rem;
  }
`;

export const TabsBody = styled.div`
  /* Styles for the TabsBody component */
`;

export const TabPanelContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 300px) and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 0.25rem;
  transition: opacity 1.8s ease-in-out;
`;
