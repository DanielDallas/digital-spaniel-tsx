import styled from "styled-components";
import { Dialog } from "@headlessui/react";

// export const HeaderContainer = styled.div`
//   background-color: #f3f4f6;
// `;

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderElement = styled.header<{ scrollDirection: "up" | "down" }>`
  ${({ scrollDirection }) => `
    position: ${scrollDirection === "down" ? "fixed" : "absolute"};
    top: 0;
    z-index: 50;
    width: 100%;
    transition: all 700ms ease-in-out;
    background-color: ${scrollDirection === "down" ? "#ffffff" : "transparent"};
  `}
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem 1rem 7.3rem;

  @media (min-width: 300px) and (max-width: 600px) {
    padding: 1rem 2rem 1rem 1rem;
  }
`;

export const LogoLink = styled.a`
  img {
    height: 4rem;
    width: auto;
  }
`;

export const NavigationLinks = styled.div`
  display: none;
  @media (min-width: 800px) {
    display: flex;
    gap: 3rem;
    margin-right: 10rem;
    a {
      color: #ffffff;
      text-decoration: none;
      font-size: 0.9rem;

      &:hover {
        text-decoration: underline;
        text-decoration-thickness: 0.15em;
        ext-underline-offset: 10px;
        text-underline-position: under;
      }
    }
  }
`;

export const MobileMenuButton = styled.button`
  margin: -0.625rem;
  border-radius: 0.375rem;
  padding: 0.625rem;
  color: #000000;

  &.hamburgericon {
    // width: 1rem;
    // height: 1rem;
  }

  @media (min-width: 800px) {
    display: none;
  }
`;

export const MobileMenuContainer = styled(Dialog)`
  .fixed {
    inset: 0;
    z-index: 50;
  }
`;

export const MobileMenuPanel = styled(Dialog.Panel)`
  .fixed {
    inset-y: 0;
    right: 0;
    z-index: 50;
    width: 100%;
    overflow-y: auto;
    background-color: white;
    padding: 1.5rem;
    max-width: 20rem;
    ring: 1px;
    ring-color: rgba(0, 0, 0, 0.1);
  }
`;

export const MobileMenuLogoLink = styled.a`
  img {
    height: 2.5rem;
    width: auto;
  }
`;

export const MobileMenuCloseButton = styled.button`
  margin: -0.625rem;
  border-radius: 0.375rem;
  padding: 0.625rem;
  color: #000000;
`;

export const MobileMenuLinks = styled.div`
  margin-top: 1.5rem;
  a {
    margin-top: 1rem;
    display: block;
    border-radius: 0.375rem;
    padding: 0.75rem 1rem;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 1.5rem;
    color: var(--text-gray-900);
    background-color: var(--gray-50);
    &:hover {
      background-color: var(--gray-200);
    }
  }
`;
