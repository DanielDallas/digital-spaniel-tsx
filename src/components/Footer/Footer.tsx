import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterMain,
  FooterContainer,
  FooterContent,
  FooterContentLinks,
  FooterLinkDiv,
  SectionTitle,
  SectionText,
  ButtonLinks,
  LinkTitle,
  Link,
  List,
  ListItem,
  SocialMediaContainer,
  SocialMediaIcon,
  SocialIcons,
  CopyRightContainer,
} from "./Footer.styles";

export default function Footer(): JSX.Element {
  return (
    <FooterMain>
      <FooterContainer>
        <FooterContent>
          <div>
            <SectionTitle>
              We're a brands <br />
              <span>best friend</span>
            </SectionTitle>
            <SectionText>{/* Section text content if need be */}</SectionText>
            <div>
              <ButtonLinks href="#getintouch">Let's talk</ButtonLinks>
            </div>
          </div>
        </FooterContent>

        <FooterContentLinks>
          <FooterLinkDiv>
            <LinkTitle>EXLORE</LinkTitle>
            <List>
              <ListItem>
                <Link href="#services">Services</Link>
              </ListItem>
              <ListItem>
                <Link href="#work">Work</Link>
              </ListItem>
              <ListItem>
                <Link href="#about">About</Link>
              </ListItem>
              <ListItem>
                <Link href="#blog">Blog</Link>
              </ListItem>
              <ListItem>
                <Link href="#careers">Careers</Link>
              </ListItem>
            </List>
          </FooterLinkDiv>

          <FooterLinkDiv>
            <LinkTitle>SERVICES</LinkTitle>
            <List>
              <ListItem>
                <Link href="#brand">Brand</Link>
              </ListItem>
              <ListItem>
                <Link href="#development">Development</Link>
              </ListItem>
              <ListItem>
                <Link href="#mrketing">Marketing</Link>
              </ListItem>
            </List>
          </FooterLinkDiv>

          <FooterLinkDiv>
            <LinkTitle>QUESTION?</LinkTitle>
            <p>
              Call Us
              <br />
              <span>
                <Link href="#callus">0121 345 678</Link>
              </span>
            </p>
            <p>
              Email Us
              <br />
              <span>
                <Link href="#emailus">info@digitalspaniel.co.uk</Link>
              </span>
            </p>
          </FooterLinkDiv>
        </FooterContentLinks>
      </FooterContainer>

      <SocialMediaContainer>
        <CopyRightContainer>
          Copyright © Digital Spaniel 2023. All rights reserved.
        </CopyRightContainer>
        <SocialIcons>
          <SocialMediaIcon href="#Facebook">
            <FaFacebookF />
          </SocialMediaIcon>
          <SocialMediaIcon href="#Instagram">
            <FaInstagram />
          </SocialMediaIcon>
          <SocialMediaIcon href="#Twitter">
            <FaTwitter />
          </SocialMediaIcon>
          <SocialMediaIcon href="#Linkedin">
            <FaLinkedin />
          </SocialMediaIcon>
        </SocialIcons>
      </SocialMediaContainer>
    </FooterMain>
  );
}
