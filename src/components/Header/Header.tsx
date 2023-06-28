import React, { useEffect, useState, useCallback } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FaBarsStaggered } from "react-icons/fa6";
import logo from "./images/logo.png";
import {
  HeaderContainer,
  HeaderElement,
  Navigation,
  LogoLink,
  MobileMenuButton,
  NavigationLinks,
  MobileMenuContainer,
  MobileMenuPanel,
  MobileMenuLogoLink,
  MobileMenuCloseButton,
  MobileMenuLinks,
} from "./Header.styles";

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: "Services", href: "/" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Header(): JSX.Element {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setScrollDirection(prevScrollPos > currentScrollPos ? "up" : "down");
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    const scrollListener = () => handleScroll();

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, [handleScroll]);

  return (
    <HeaderContainer>
      <HeaderElement scrollDirection={scrollDirection}>
        <Navigation aria-label="Global">
          <div>
            <LogoLink href="/">
              <img className="logoimage" src={logo} alt="" />
            </LogoLink>
          </div>
          <div>
            <MobileMenuButton
              type="button"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Mobile Menu</span>
              <FaBarsStaggered />
            </MobileMenuButton>
          </div>
          <NavigationLinks>
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="headermenu">
                {item.name}
              </a>
            ))}
          </NavigationLinks>
        </Navigation>
        <MobileMenuContainer
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <div className="fixed inset-0 z-50" />
          <MobileMenuPanel>
            <div>
              <MobileMenuLogoLink href="/">
                <img className="mobilelogo" src={logo} alt="" />
              </MobileMenuLogoLink>
              <MobileMenuCloseButton
                type="button"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" />
              </MobileMenuCloseButton>
            </div>
            <MobileMenuLinks>
              {navigation.map((item) => (
                <a key={item.name} href={item.href}>
                  {item.name}
                </a>
              ))}
            </MobileMenuLinks>
          </MobileMenuPanel>
        </MobileMenuContainer>
      </HeaderElement>
    </HeaderContainer>
  );
}
