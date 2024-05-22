import styled from "styled-components";
import { debug } from "../styles/globals";

export const AppMainStyled = styled.main`
  width: 100%;
  flex: 1;
  height: max-content;
  display: flex;
  ${debug};
  padding: var(--padding_M) 0 0 var(--padding_M);
  .app-main-content {
    flex: 1;
  }
`;
