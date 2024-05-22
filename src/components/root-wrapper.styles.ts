import styled from "styled-components";

export const RootWrapperStyled = styled.div`
  flex: 1 !important;
  display: flex;
  flex-direction: column;
  gap: var(--margin_M);
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
