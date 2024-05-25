import styled from "styled-components";

export const WideCourseCardStyled = styled.div`
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
`;
