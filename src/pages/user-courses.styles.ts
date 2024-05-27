import styled from "styled-components";
import { debug } from "../styles/globals";

export const UserCoursesStyled = styled.section`
  width: 100%;
  height: max-content;
  /* ${debug}; */
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: var(--padding_S) var(--padding_XL);
  font-family: poppins;
  .courses-top {
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: flex-start;
    & > h2 {
      font-size: 2.2rem;
      text-transform: capitalize;
      font-weight: 500;
    }
  }
  .courses-bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: max-content;
    gap: 20rem;
    .courses-list-container {
      width: 100%;
      height: max-content;
      list-style-type: none;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
      @media screen and (max-width: 800px) {
        grid-template-columns: repeat(1, minmax(35rem, 0.8fr));
      }
      grid-auto-flow: row;
      grid-auto-rows: 40rem;
      justify-content: center;
      margin-right: auto;
      .course-card-wrapper {
        /* height: 45rem; */
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-bottom-left-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
        .course-card-small {
          width: 80%;
          height: 80%;
          display: flex;
          flex-direction: column;
          border-radius: inherit;
          align-items: center;
          border: 1px solid var(--label-color);
          border-bottom-left-radius: 1rem;
          .top {
            width: 100%;
            height: 15rem;
            img {
              width: 100%;
              height: 15rem;
              object-fit: cover;
              aspect-ratio: 3 / 2;
            }
          }
          .bottom {
            flex: 1;
            width: 100%;
            font-family: montserrat;
            /* ${debug}; */
            .card-bottom-text {
              font-size: 1.8rem;
              height: 3rem;
              text-wrap: nowrap;
              text-align: center;
              font-family: poppins;
              width: 80%;
              margin: 2rem auto;
              text-overflow: ellipsis;
              overflow: hidden;
            }
            .course-circle-progress-wrapper {
              width: 100%;
              height: 5rem;
              display: flex;
              justify-content: flex-end;
            }
            .course-info-cta-area {
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 3rem;
              font-weight: 600;
              text-transform: capitalize;
              padding: 0 2rem;
              p {
                font-size: 1.2rem;
              }
            }
          }
        }
      }
    }
  }
`;
