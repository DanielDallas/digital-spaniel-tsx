import styled from "styled-components";

interface TestimonyCardProps {
  isEven: boolean;
}

export const TestimoniesContainer = styled.div`
  padding: 2rem 8rem;
  width: 80%;
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
  background-color: ${(props) => (props.isEven ? "#19293A" : "#E2E4E6")};
  margin: 1rem;
  padding: 1rem;
  border-radius: 10px;
  padding: 0.07rem;
  //   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const TestimonyContent = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  font-size: 1rem;
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
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;
