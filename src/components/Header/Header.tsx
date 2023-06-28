import React, { useEffect, useState, useCallback } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
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
              {/* <span className="sr-only">Digital Spaniel</span> */}
              <img className="logoimage" src={logo} alt="" />
            </LogoLink>
          </div>
          <div>
            <MobileMenuButton
              type="button"
              onClick={() => setMobileMenuOpen(true)}
            >
              {/* <span className="sr-only">Mobile Menu</span> */}
              <Bars3Icon className="hamburgericon" aria-hidden="true" />
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
        <MobileMenuContainer open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <MobileMenuPanel>
            <div>
              <MobileMenuLogoLink href="/">
                {/* <span className="sr-only">Digital Spaniel</span> */}
                <img className="mobilelogo" src={logo} alt="" />
              </MobileMenuLogoLink>
              <MobileMenuCloseButton
                type="button"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </MobileMenuCloseButton>
            </div>
            <MobileMenuLinks>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
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
