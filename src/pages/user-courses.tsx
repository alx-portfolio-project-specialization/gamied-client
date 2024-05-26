import { UserCoursesStyled } from "./user-courses.styles";

export const UserCourses: React.FC = () => {
  return (
    <UserCoursesStyled>
      <div className="courses-top">
        <h2>all courses</h2>
      </div>
      <div className="courses-bottom">
        <div className="courses-list-container">
          <div className="course-card-small">
            <div className="top">
              <img
                src=""
                alt="image representing a course card in a list of courses"
              />
            </div>
            <div className="bottom">
              <p className="card-bottom-text">
                sticky notes - a complete guide
              </p>
              <div className="course-circle-progress-wrapper"></div>
              <div className="course-info-cta-area">
                <p>28 lessons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </UserCoursesStyled>
  );
};
