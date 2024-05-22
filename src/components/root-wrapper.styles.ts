import styled from "styled-components";
import { debug } from "../styles/globals";

export const RootWrapperStyled = styled.div`
  flex: 1 !important;
  display: flex;
  flex-direction: column;
  ${debug};
  gap: var(--margin_M);
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
