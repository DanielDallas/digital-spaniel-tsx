import styled from "styled-components";

export const FooterMain = styled.div`
  padding: 6rem 3rem 0.1rem 8rem;
  background-color: #f2f2f2;

  @media (min-width: 300px) and (max-width: 600px) {
    padding: 3rem 1rem 0.5rem 1rem;
  }
`;

export const FooterContainer = styled.footer`
  right: 0;
  left: 0;
  display: flex;
  justify-content: start;
  align-items: start;

  @media (min-width: 300px) and (max-width: 600px) {
    display: inherit;
  }
`;

export const FooterContent = styled.div`
  @media (min-width: 800px) {
    padding: ;
    right: 0px;
    display: flex;
    width: 40%;
  }
`;

export const FooterContentLinks = styled.div`
  display: flex;
  padding-left: 1rem;
  width: 60%;
`;

export const FooterLinkDiv = styled.div`
  @media (min-width: 800px) {
    flex-basis: 20%;
  }

  @media (min-width: 300px) and (max-width: 600px) {
    flex-basis: 20%;
    margin-top: 3rem;
    gap: 3rem;
  }
`;

export const LinkTitle = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
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

export const SectionText = styled.div`
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

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;

  @media (min-width: 300px) and (max-width: 600px) {
    margin-bottom: 2px;
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 5rem 0 1rem 0;

  @media (min-width: 300px) and (max-width: 600px) {
    display: inherit;
    align-items: start;
  }
`;

export const SocialMediaIcon = styled.a`
  font-size: 18px;
  color: #000000;
  margin-left: 10px;

  &:hover {
    color: #c0345e;
  }
`;

export const SocialIcons = styled.span`
  margin-left: 30rem;

  @media (min-width: 300px) and (max-width: 600px) {
    margin-left: 0rem;
    width: 100%;
  }
`;

export const CopyRightContainer = styled.div`
  @media (min-width: 800px) {
  }

  @media (min-width: 300px) and (max-width: 600px) {
    margin-bottom: 1rem;
    width: 100%;
  }
`;
