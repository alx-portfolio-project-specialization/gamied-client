import { WideCourseCardStyled } from "./wide-course-card.styles";

export const WideCourseCard: React.FC = () => {
  return (
    <WideCourseCardStyled className="course-card">
      <div className="card-left">
        <img
          src="../../public/images/programming-1.jpg"
          alt="a thumbnail image of a course on an edtech platform"
        />
      </div>
      <div className="card-right">
        <h3>29 lessons</h3>
        <p className="card-title">introduction to programming</p>
        <div className="card-progress-area">
          <div className="card-progress-bar">
            <span
              className="card-progress"
              style={{ "--progress-here": "48%" } as CSSProperties}
            ></span>
          </div>
          <span className="card-progress-count">48%</span>
        </div>
      </div>
    </WideCourseCardStyled>
  );
};
