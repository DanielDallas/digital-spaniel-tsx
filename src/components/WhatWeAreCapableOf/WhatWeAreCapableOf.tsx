import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  CapabilitiesContainer,
  CapabilitiesContent,
  CapableOf,
  SectionTitle,
  SectionText,
  ButtonLinks,
  Link,
} from "./WhatWeAreCapableOf.style";

export default function WhatWeAreCapableOf(): JSX.Element {
  return (
    <CapabilitiesContainer>
      <CapabilitiesContent>
        <div>
          <SectionTitle>
            What are <br />
            <span>We Capable of</span>
          </SectionTitle>
          <SectionText>
            By focusing on design as an enabler and putting a huge emphasis on
            our clients as co-producers, we create innovative, sustainable
            marketing that enhances brand experience and user engagement.
          </SectionText>
          <div>
            <ButtonLinks href="#getintouch">Our Process</ButtonLinks>
          </div>
        </div>
      </CapabilitiesContent>

      <CapableOf>
        <div>
          <p
            style={{
              fontWeight: "600",
              marginBottom: "-10px",
            }}
          >
            BRAND
          </p>
          <p className="">
            <Link href="#brand">
              Brand Strategy{" "}
              <FontAwesomeIcon
                icon={faCircleChevronRight}
                style={{ color: "#C0345E", marginLeft: "2px" }}
              />
            </Link>
            <br />
            <Link href="#logo">Logo & Name</Link>
            <br />
            <Link href="#apps">Identity & Collateral</Link>
          </p>

          <p
            style={{
              fontWeight: "600",
              marginBottom: "-10px",
              marginTop: "px",
            }}
          >
            DEVELOPMENT
          </p>
          <p>
            <Link href="#ecommerce">eCommerce</Link>
            <br />
            <Link href="#web">Web Development</Link>
            <br />
            <Link href="#apps">Mobile Apps</Link>
          </p>
        </div>

        <div>
          <p
            style={{
              fontWeight: "600",
              marginBottom: "-10px",
            }}
          >
            MARKETING
          </p>
          <p>
            <Link href="#digital">Digital</Link>
            <br />
            <Link href="#research">Market Research</Link>
          </p>
        </div>
      </CapableOf>
    </CapabilitiesContainer>
  );
}
