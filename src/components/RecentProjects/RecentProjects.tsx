import React, { useState } from "react";
import styled, { css } from "styled-components/macro";
import {
  RecentProjectsContainer,
  Title,
  Tabs,
  TabsHeader,
  Tab,
  TabsBody,
  TabPanelContainer,
  ProjectImage,
} from "./RecentProjects.styles";
import ProjectPhoto1 from "./images/project1.png";
import ProjectPhoto2 from "./images/project2.png";
import ProjectPhoto3 from "./images/project3.png";
import ProjectPhoto4 from "./images/project4.png";

interface ProjectData {
  label: string;
  value: string;
  images: string[];
}

const FadeContainer = styled.div<{ fading: boolean }>`
  opacity: 1;
  transition: opacity 0.8s ease;

  ${(props) =>
    props.fading &&
    css`
      opacity: 0;
    `}
`;

export default function RecentProjects(): JSX.Element {
  const data: ProjectData[] = [
    {
      label: "All",
      value: "all",
      images: [ProjectPhoto1, ProjectPhoto2, ProjectPhoto3, ProjectPhoto4],
    },
    {
      label: "Branding",
      value: "branding",
      images: [ProjectPhoto1, ProjectPhoto2, ProjectPhoto3],
    },
    {
      label: "Web design",
      value: "web",
      images: [ProjectPhoto4, ProjectPhoto1],
    },
    {
      label: "Digital Marketing",
      value: "dmarketing",
      images: [ProjectPhoto2, ProjectPhoto3, ProjectPhoto4],
    },
  ];

  const [activeTab, setActiveTab] = useState<string>(data[0].value);
  const [fading, setFading] = useState<boolean>(false);

  const shuffleImages = (images: string[]): string[] => {
    const shuffledImages = [...images];
    for (let i = shuffledImages.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledImages[i], shuffledImages[j]] = [
        shuffledImages[j],
        shuffledImages[i],
      ];
    }
    return shuffledImages;
  };

  const selectedTab = data.find((item) => item.value === activeTab);

  const handleTabClick = (value: string) => {
    if (value !== activeTab) {
      setFading(true);
      setTimeout(() => {
        setActiveTab(value);
        setFading(false);
      }, 300);
    }
  };

  return (
    <RecentProjectsContainer>
      <div>
        <Title>
          Some of our <br />
          <span>Recent Projects</span>
        </Title>
      </div>

      <div>
        <Tabs value={activeTab}>
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => handleTabClick(value)}
                active={activeTab === value}
              >
                {label}
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            <FadeContainer fading={fading}>
              {selectedTab && (
                <TabPanelContainer
                  key={selectedTab.value}
                  value={selectedTab.value}
                >
                  {shuffleImages(selectedTab.images).map((imageUrl, index) => (
                    <ProjectImage
                      key={index}
                      style={{ opacity: fading ? 0 : 1 }}
                      src={imageUrl}
                      alt="Recent Project"
                    />
                  ))}
                </TabPanelContainer>
              )}
            </FadeContainer>
          </TabsBody>
        </Tabs>
      </div>
    </RecentProjectsContainer>
  );
}
