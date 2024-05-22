import styled from "styled-components";
import { debug } from "../styles/globals";

export const AnnouncementTabStyled = styled.aside`
  width: 30%;
  height: 100vh;
  @media screen and (max-width: 999px) {
    display: none;
  }
  @media screen and (min-width: 1500px) {
    margin-right: var(--margin_M);
  }
  overflow-x: hidden;
  overflow-y: auto;
  ${debug};
`;
