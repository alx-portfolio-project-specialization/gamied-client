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

    }
  }
`;
