import styled from "styled-components";

export const CountdownCircleStyled = styled.div`
  width: 8rem;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  --countdown-circle-stroke-here: var(--badge-color);
  --cx-here: 25;
  --cy-here: 25;
  --transition: stroke-dashoffset 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  .skill {
    position: relative;
    min-width: 8rem;
    height: 8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 80%;
      height: 80%;
      transform: rotate(309deg) scale(1.3);
      overflow: initial;
      transform-origin: center;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      background-color: var(--bg-color);
      border-radius: 50%;
      box-shadow: 2px 2px 5px var(--inactive-text-color);
      circle {
        stroke-width: 0.5rem;
        fill: none;
        transition: all 0.5s ease;
        &:nth-child(1) {
          stroke: var(--bright-color);
          /* fill: var(--bright-color); */
        }
        &.progress {
          stroke: var(--stroke);
          z-index: 1;
          transition: var(--transition);
          stroke-dasharray: var(--stroke-dasharray);
          stroke-dashoffset: var(--stroke-dasharray);
          animation: progress var(--animation-time) ease-in forwards;
          --webkit-stroke-position: inside;
          stroke-linecap: round;
        }
      }
    }

    .data-progress {
      font-family: poppins;
      position: absolute;
      content: "";
      color: var(--primary-color);
      font-size: 2.5rem;
      font-weight: 600;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  @keyframes progress {
    to {
      stroke-dashoffset: var(--stroke-dashoffset);
    }
  }
`;
