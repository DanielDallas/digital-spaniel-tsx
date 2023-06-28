import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import TestimonyPhoto from "./images/face01.png";
import {
  TestimoniesContainer,
  Title,
  CarouselContainer,
  TestimonyCard,
  TestimonyContent,
  TestimonyAuthor,
  TestimonyName,
  TestimonyTitle,
  TestimonyImage,
} from "./Testimony.styles";

interface Testimony {
  id: string;
  content: string;
  name: string;
  title: string;
}

const Testimonies: React.FC = () => {
  const [testimonies, setTestimonies] = useState<Testimony[]>([]);

  const getData = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:3031/testimonies", requestOptions)
      .then((response) => response.json())
      .then((result) => setTestimonies(result))
      .catch((error) => console.log("Error fetching JSON data", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <TestimoniesContainer>
      <Title>
        Kind words
        <br />
        <span>from our clients</span>
      </Title>

      <CarouselContainer>
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={true}
          infiniteLoop={true}
          swipeable={true}
          centerMode={true}
          centerSlidePercentage={33.333} // Set centerSlidePercentage to 100 for mobile view
          emulateTouch={true} // Add emulateTouch prop for mobile touch support
          responsive={{
            // Configure responsive settings
            desktop: {
              breakpoint: { max: 3000, min: 800 },
              items: 3,
              partialVisibilityGutter: 40,
            },
            tablet: {
              breakpoint: { max: 724, min: 400 },
              items: 2,
              partialVisibilityGutter: 30,
            },
            mobile: {
              breakpoint: { max: 390, min: 0 },
              items: 1,
              partialVisibilityGutter: 20,
            },
          }}
        >
          {testimonies.map((testimony) => {
            const { id, content, name, title } = testimony;
            return (
              <div key={id}>
                <TestimonyCard>
                  <TestimonyContent>{content}</TestimonyContent>
                  <TestimonyImage src={TestimonyPhoto} alt={name} />
                  <TestimonyAuthor>
                    <TestimonyName>{name}</TestimonyName>
                    <TestimonyTitle>{title}</TestimonyTitle>
                  </TestimonyAuthor>
                </TestimonyCard>
              </div>
            );
          })}
        </Carousel>
      </CarouselContainer>
    </TestimoniesContainer>
  );
};

export default Testimonies;
