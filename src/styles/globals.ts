import { createGlobalStyle, css } from "styled-components";

export const debug = css`
  border: 1px solid red;
  background-color: rgba(94, 95, 96, 0.17);
`;

export const GlobalStyle = createGlobalStyle`

html {
  font-size: 8px;
  scroll-behavior: smooth;
  @media screen and (max-width: 800px) {
    font-size: 7px;
  }
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
body, #root {
  margin: 0; line-height: normal;
  width: 100vw;
  padding: 0;
  overflow: auto;
  overflow-x: hidden;
  height: max-content;
  min-height: 100vh;
}
#root {
  display: flex;
  align-items: center;
  justify-content: center;
  #app {
    width: 100%;
    height: max-content;
    min-height: 100vh;
    display: flex;
    ${debug};
    gap: 2rem;
    @media screen and (max-width: 800px) {
      gap: unset;
    }
    
    .side-tab-wrapper {
      width: 30rem;
      height: max-content;
      min-height: 100vh;
      @media screen and (max-width: 800px) {
        width: max-content;
      }
    }
  }
}
body > script {
  width: 0 !important;
  height: 0 !important;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
}

section {
  width: 100%;
  height: max-content;
  min-height: 60rem;
  overflow: hidden;
}

:root {
  --primary-color: #272727;
  --faint-accent-color: rgba(228, 95, 20, 0.26);
  --text-color: #333333;
  --active-text-color: #272727;
  --badge-color: #FD7427;
  --label-color: #CAC8C8;
  --cta-bg: rgba(94, 95, 96, 0.27);
  --logo-color: #3C4442;
  --bg-color: #F3F3F3;
  --bright-color: #FFFFFF;
  --active-text-bg: rgba(94, 95, 96, 0.17);
  --tab-icon-color: rgba(98, 76, 64, 0.67);
  --inactive-text-color: #BABABA;
  --progress-color: #35AC65;
  --badge-bg-color: rgba(231, 233, 124, 0.42);
  --aside-tab-bg: rgba(159, 233, 124, 0.42)

  //box model
  --padding_S: 1rem;
  --padding_M: 3rem;
  --padding_L: 5rem;
  --padding_XL: 10rem;

  --margin_S: 1rem;
  --margin_M: 3rem;
  --margin_L: 5rem;
  --margin_XL: 10rem;
}
`;
