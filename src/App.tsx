import React from "react";
import { ThemeProvider } from "styled-components";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WhatWeAreCapableOf from "./components/WhatWeAreCapableOf/WhatWeAreCapableOf";
import RecentProjects from "./components/RecentProjects/RecentProjects";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import WeAllAbout from "./components/WeAllAbout/WeAllAbout";
import Testimonies from "./components/Testimony/Testimony";
import Footer from "./components/Footer/Footer";
import theme from "./styles/theme"; // Import the theme object

const GlobalStyles = createGlobalStyle`
  body {
 font-family: 'Titillium Web', sans-serif;
  }

  p{
    font-size:12px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="">
        <Header />
        <Hero />
        <WhatWeAreCapableOf />
        <RecentProjects />
        <CaseStudy />
        <WeAllAbout />
        <Testimonies />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
