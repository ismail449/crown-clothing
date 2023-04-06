import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 30px auto;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
