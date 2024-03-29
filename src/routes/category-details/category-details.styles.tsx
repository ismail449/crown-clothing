import styled from "styled-components";

export const CategoryDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 10px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CategoryDetailsTitle = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
`;
