import styled from "styled-components";
import { debug } from "../styles/globals";

export const AppMainStyled = styled.main`
  flex: 1;
  height: max-content;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: var(--padding_M) 0 0 var(--padding_M);
  --section-width-here: 95%;
  /* background-color: green; */

  .home-section-title {
    font-size: 1.8rem;
    font-family: poppins;
    font-weight: 500;
    color: var(--text-color);

    /* font-family: poppins; */
    /* font-weight: 500; */

    text-transform: capitalize;
  }
  .app-main-content {
    flex: 1;
    max-width: 54vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 4rem;
    margin-bottom: var(--margin_XL);
    margin-right: -2rem;
  }
`;

export const WelcomeBoardStyled = styled.div`
  width: var(--section-width-here);
  height: 15rem;
  padding: var(--padding_M) var(--padding_L);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #586764 0%, #b1a899 100%);
  border-radius: 1rem;

  .wp-left {
    width: 40%;
    height: max-content;
    min-height: 100%;
    span {
      font-size: 2rem;
      color: var(--bg-color);
    }
    h2 {
      font-size: 3.5rem;
      color: var(--bright-color);
      margin-top: 1.5rem;
    }
  }
  .wp-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    position: relative;
    overflow: visible;
    img {
      position: absolute;
      width: 20rem;
      right: 0;
      top: -10rem;
      content: "";
      display: block;
      transform: scale(0.8);
      transform-origin: top;
    }
  }
`;

export const CurrentCourseSectionStyled = styled.section`
  width: var(--section-width-here);
  height: 30rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-bottom: var(--margin_L);
  .ccs-top {
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: space-between;
    p {
      margin: auto 0;
    }
    button {
      width: 20rem;
      height: 4.5rem;
      background-color: var(--badge-bg-color);
      color: var(--badge-color);
      font-size: 1.5rem;
      &:hover,
      &:active {
        border: 0.05px solid var(--badge-color);
      }
      &:focus {
        outline: unset;
        border: 0.05px dashed var(--badge-color);
      }
    }
  }
  .ccs-bottom {
    height: max-content;
    min-height: 15rem;
    .course-card {
      height: 100%;
      margin-right: auto;
      width: 70%;
      max-width: 60rem;
      border-radius: 1rem;
      background-color: var(--active-text-bg);
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      padding: 2rem;
      .card-left {
        width: max-content;
        height: max-content;
        img {
          height: 10rem;
          width: 10rem;
          border-radius: 1rem;
          object-fit: cover;
          aspect-ratio: 1 / 1;
        }
      }
      .card-right {
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        h3 {
          font-size: 1.5rem;
          text-transform: capitalize;
          color: #5e5f60;
        }
        .card-title {
          font-size: 1.8rem;
          text-transform: capitalize;
          color: var(--text-color);
          font-family: montserrat;
          font-weight: 700;
        }
        .card-progress-area {
          width: 100%;
          height: 3rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          .card-progress-bar {
            flex: 1;
            height: 0.8rem;
            background-color: var(--bg-color);
            border-radius: 1rem;
            .card-progress {
              min-width: var(--progress-here);
              width: var(--progress-here) !important;
              display: block;
              height: 100%;
              border-radius: inherit;
              background-color: var(--progress-color);
            }
          }
          .card-progress-count {
            width: 4rem;
            font-size: 1.8rem;
          }
        }
      }
    }
  }
`;

export const RecommendedCourseSectionStyled = styled.section`
  width: var(--section-width-here);
  max-width: 55vw;
  height: 42rem;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  overflow-x: auto;
  margin-bottom: var(--margin_M);
  .rcs-top {
    margin-bottom: var(--margin_XL);
    height: 3rem;
  }
  .rcs-bottom {
    flex: 1;
    .list-course-cards {
      width: 100%;
      height: 100%;
      display: flex;
      gap: 5rem;
      overflow-x: auto;
      overflow-y: hidden;

      .list-course-card {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid var(--label-color);
        border-radius: 0.5rem;
        min-width: 35rem !important;
        &-top {
          width: 100%;
          height: 12rem;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            aspect-ratio: 3 / 2;
          }
        }
        &-bottom {
          width: 100%;
          flex: 1;
          font-family: poppins;
          display: flex;
          flex-direction: column;
          align-items: center;

          & > p {
            font-size: 1.5rem;
            font-weight: 500;
            width: 75%;
            height: max-content;
            text-align: center;
            margin-top: 2rem;
            color: var(--text-color);
          }
          .count-and-cta-div {
            width: 100%;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 var(--padding_M);
            h3 {
              font-family: montserrat;
              font-weight: 500;
              font-size: 1.5rem;
              width: max-content;
              color: var(--text-color);
            }
            button {
              width: 12rem;
              height: 3.5rem;
              border-radius: 0.5rem;
              color: var(--bg-color);
              background-color: var(--primary-color);
              text-transform: capitalize;
              font-size: 1.5rem;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
    }
  }
`;
