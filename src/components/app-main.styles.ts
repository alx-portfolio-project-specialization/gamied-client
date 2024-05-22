import styled from "styled-components";
import { debug } from "../styles/globals";

export const AppMainStyled = styled.main`
  width: 100%;
  flex: 1;
  height: max-content;
  display: flex;
  ${debug};
  padding: var(--padding_M) 0 0 var(--padding_M);
  --section-width-here: 95%;
  .home-section-title {
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    text-transform: capitalize;
  }
  .app-main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4rem;
    margin-bottom: var(--margin_XL);
  }
`;

export const WelcomeBoarStyled = styled.div`
  width: var(--section-width-here);
  height: 15rem;
  ${debug};
`;

export const CurrentCourseSectionStyled = styled.section`
  width: var(--section-width-here);
  height: 30rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: var(--margin_XL);
  ${debug};
  .ccs-top {
    width: 100%;
    ${debug};
    height: max-content;
    display: flex;
    justify-content: space-between;
    p {
      margin: auto 0;
    }
    button {
      width: 12rem;
      height: 4rem;
    }
  }
  .ccs-bottom {
    ${debug};
    height: 18rem;
    .course-card {
      height: 100%;
      margin-right: auto;
      width: 80%;
      ${debug};
    }
  }
`;

export const RecommendedCourseSectionStyled = styled.section`
  width: var(--section-width-here);
  height: 35rem;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: auto;
  ${debug};
  margin-bottom: var(--margin_M);
  .rcs-top {
    ${debug};
    margin-bottom: var(--margin_XL);
    height: 3rem;
  }
  .rcs-bottom {
    ${debug};
    flex: 1;
  }
`;
