import styled from "styled-components";
import backgroundImage from "../../assets/img/beach.jpg";

export const Showcase = styled.header`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  height: 94.3vh;
`;

export const ShowcaseHeader = styled.h1`
  font-size: 50px;
  line-height: 1.2;
`;

export const ShowcaseParagraph = styled.p`
  font-size: 20px;
`;
