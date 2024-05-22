import styled from "styled-components";
import { debug } from "../styles/globals";

export const HeaderSearchBoxStyled = styled.form`

`;

export const HeaderStyled = styled.header`
  ${debug};
  height: 10rem;
  width: 100%;
  
  @media screen and (max-width: 800px) {
    margin-left: 0;
  }
`;
