import styled from "styled-components";

interface TestimonyCardProps {
  isEven: boolean;
}

export const TestimoniesContainer = styled.div`
  padding: 2rem 8rem;
  width: 80%;

  @media (min-width: 300px) and (max-width: 600px) {
    padding: 2rem 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 500;
  color: #111827;
`;

export const CarouselContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;

  @media (max-width: 767px) {
    /* Styles for mobile view */
  }
`;

export const TestimonyCard = styled.div<TestimonyCardProps>`
  background-color: ${(props) => (props.isEven ? "#E2E4E6" : "#19293A")};
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  padding: 0.07rem;
  //   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TestimonyContent = styled.p`
  margin: 1.3rem 1.4rem;
  font-size: 0.94rem;
  line-height: 1.6rem;
  color: #4b5563;
  font-weight: 100;
  opacity: 1;
`;

export const TestimonyAuthor = styled.div`
  margin-top: 1rem;
`;

export const TestimonyName = styled.h3`
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: -0.7rem;
`;

export const TestimonyTitle = styled.p`
  font-size: 0.8rem;
  color: #6b7280;
`;

export const TestimonyImage = styled.img`
  padding: 0rem 5.8rem;
  width: 60px;
  height: 60px;
  border-radius: 30%;
`;
