import styled from "styled-components";
import { debug } from "../styles/globals";

export const CourseInfoStyled = styled.section`
  font-family: poppins;
  padding-left: var(--padding_L);
  margin-bottom: 15rem;
  height: max-content;
  .course-desc-title {
    font-size: 4rem;
    font-weight: 500;
    text-transform: capitalize;
    color: var(--primary-color);
    margin-bottom: 2.5rem;
  }
  .course-desc {
    font-size: 2rem;
    color: var(--primary-color);
    width: 80%;
    margin-bottom: var(--margin_L);
  }

  .course-info-area {
    width: 97%;
    height: max-content;
    min-height: 50rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    gap: 4%;

    @media screen and (max-width: 800px) {
      flex-direction: column;
    }
    li {
      list-style-type: none;
    }
    .area-left {
      flex: 1;
      height: max-content;
      display: flex;
      flex-direction: column;
      gap: 3rem;
      .horizontal-file-tab {
        width: 100%;
        height: 5rem;
        display: flex;
        gap: 5rem;
        border-bottom: 0.2rem solid var(--label-color);
        li {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 15rem;
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            position: relative;
            font-size: 1.8rem;
            z-index: 2;
            span {
              color: var(--primary-color);
              position: relative;
            }
            &.active {
              span {
                color: var(--bright-color) !important;
              }
              &::before {
                background-color: var(--primary-color);
                z-index: 0;
                border-radius: 1rem;
                border-bottom-left-radius: unset;
                border-bottom-right-radius: unset;
              }
            }
            &::before {
              position: absolute;
              content: "";
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              z-index: 0;
            }
          }
        }
      }
      .course-outline-area {
        border-radius: 1rem;
        height: max-content;
        border: 1px solid var(--label-color);
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3rem;
        --inactive-text-color: #7d7d7d;
        .coa-top {
          width: 100%;
          height: 8rem;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          &-left {
            width: 8rem;
            height: 100%;
            div {
              width: 8rem;
              height: 100%;
              border-radius: 0.5rem;
              border: 1px solid var(--label-color);
              span {
                width: 2rem;
                height: 2rem;
                svg {
                  width: 100%;
                  height: 100%;
                  transform: scale(0.4);
                  path {
                    fill: white !important;
                  }
                }
              }
            }
          }
          &-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1rem;
            h2 {
              font-size: 2.5rem;
              font-weight: 500;
            }
            .course-outline-stat-div {
              height: max-content;
              width: 100%;
              display: flex;
              gap: 1rem;
              align-items: center;
              p {
                font-size: 1.4rem;
                color: var(--inactive-text-color);
              }
              span {
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 50%;
                background-color: var(--inactive-text-color);
              }
            }
          }
        }
        .coa-bottom {
          width: 100%;
          height: max-content;
          margin-bottom: 7rem;
          padding-bottom: var(--padding_M);
          border-radius: 1.5rem;
          border: 1px solid var(--label-color);
          .course-outline-accordion {
            height: max-content;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
            --content-icon-color-here: red;
            --uniform-padding-here: 0 var(--padding_M);
            .accordion-head {
              height: 8rem;
              width: 100%;
              &.first {
                border-radius: inherit;
              }
              padding: var(--uniform-padding-here);
              display: flex;
              justify-content: space-between;
              align-items: center;
              background-color: var(--active-text-bg);
              border-bottom: 1px solid var(--label-color);
              & > p {
                font-size: 2rem;
                color: var(--active-text-color);
                font-weight: 500;
              }
              .head-right {
                width: max-content;
                min-width: 20rem;
                display: flex;
                align-items: center;
                gap: 1rem;
                .duration-details {
                  width: max-content;
                  display: inherit;
                  align-items: inherit;
                  gap: 1rem;
                  span {
                    width: 0.5rem;
                    height: 0.5rem;
                    background-color: var(--text-color);
                    border-radius: 50%;
                    display: inline-flex;
                  }
                  p {
                    display: inline-flex;
                    font-size: 1.4rem;
                    font-weight: 500;
                    color: var(--text-color);
                  }
                }
                .accordion-controller {
                  width: max-content;
                  height: 3rem;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                  svg {
                    height: 80%;
                    transform: scale(0.6);
                  }
                }
              }
            }

            .accordion-content-list {
              padding: var(--uniform-padding-here);
              width: 100%;
              height: max-content;
              display: flex;
              flex-direction: column;
              overflow: hidden;
              .accordion-content {
                height: 8rem;
                width: 100%;
                display: flex;
                align-items: center;
                gap: 1rem;
                --content-icon-color-here: var(--text-color);
                position: relative;
                overflow: visible;
                &::before {
                  bottom: 0;
                  height: 0.1rem;
                  width: 100%;
                  content: "";
                  display: block;
                  position: absolute;
                  background-color: var(--label-color);
                  transform: scaleX(2);
                }
                .content-icon-wrapper {
                  height: 100%;
                  width: 8rem;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  svg {
                    height: 100%;
                    transform: scale(0.4);
                  }
                }

                .accordion-content-text {
                  font-size: 2rem;
                  font-weight: 500;
                }
                .accordion-content-badge {
                  width: max-content;
                  padding: 0 2rem;
                  height: 3.5rem;
                  justify-self: flex-end;
                  margin-left: auto;
                  margin-right: var(--margin_S);
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  border-radius: 4rem;
                  gap: 0.5rem;
                  background-color: var(--aside-tab-bg);
                  p {
                    font-weight: 500;
                    text-transform: uppercase;
                  }
                  svg {
                    height: 1.5rem;
                  }
                }
              }
            }
          }
        }
      }
    }

  }
`;
