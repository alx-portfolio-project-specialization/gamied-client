import styled from "styled-components";
import { debug } from "../styles/globals";

export const SideTabStyled = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: inherit;
  @media screen and (max-width: 800px) {
    width: 100vw;
  }
  ${debug};
`;
