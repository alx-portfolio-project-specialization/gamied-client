import { courseData } from "../data/course-list";
import { CourseListType } from "../types";
import { AnnouncementTab } from "./announcement-tab";
import {
  AppMainStyled,
  CurrentCourseSectionStyled,
  RecommendedCourseSectionStyled,
  WelcomeBoardStyled,
} from "./app-main.styles";
import { SmallCourseCard } from "./small-course-card";
import { WideCourseCard } from "./wide-course-card";

const WelcomeBoard: React.FC = () => {
  return (
    <WelcomeBoardStyled>
      <div className="wp-left">
        <span>welcome,</span>
        <h2>John Doe</h2>
      </div>
      <div className="wp-right">
        <img
          src="/illustrations/community-learning.png"
          alt="community learning illustration"
        />
      </div>
    </WelcomeBoardStyled>
  );
};

const CurrentCourseSection: React.FC = () => {
  return (
    <CurrentCourseSectionStyled>
      <div className="ccs-top">
        <p className="home-section-title">Current Course</p>
        <button className="home-section-cta">Continue Course</button>
      </div>
      <div className="ccs-bottom">
        <WideCourseCard />
      </div>
    </CurrentCourseSectionStyled>
  );
};

const RecommendedCourseSection: React.FC<{ courses: CourseListType }> = ({
  courses,
}) => {
  return (
    <RecommendedCourseSectionStyled>
      <div className="rcs-top">
        <p className="home-section-title">Recommended Courses</p>
      </div>
      <div className="rcs-bottom">
        <ul className="list-course-cards">
          {courses.slice(0, 4).map((entry) => {
            return (
              <SmallCourseCard entry={entry} withCTA={true} variant="home" key={entry.id}/>
            );
          })}
          {/* <li className="list-course-card">
            <div className="list-course-card-top">
              <img src="/images/programming-1.jpg" alt="" />
            </div>
            <div className="list-course-card-bottom">
              <p>Introduction to programming</p>
              <div className="count-and-cta-div">
                <h3>28 lessons</h3>
                <button className="list-course-cta">Enroll now</button>
              </div>
            </div>
          </li> */}

          {/* <li className="list-course-card">
            <div className="list-course-card-top">
              <img
                src="/images/sticky-notes-introduction.jpg"
                alt=""
              />
            </div>
            <div className="list-course-card-bottom">
              <p className="course-card-title">Introduction to programming</p>
              <div className="count-and-cta-div">
                <h3>28 lessons</h3>
                <button className="list-course-cta">Enroll now</button>
              </div>
            </div>
          </li> */}

          {/* <li className="list-course-card">
            <div className="list-course-card-top">
              <img src="/images/building-soft-skills.jpg" alt="" />
            </div>
            <div className="list-course-card-bottom">
              <p className="course-card-title">Introduction to programming</p>
              <div className="count-and-cta-div">
                <h3>28 lessons</h3>
                <button className="list-course-cta">Enroll now</button>
              </div>
            </div>
          </li> */}
        </ul>
      </div>
    </RecommendedCourseSectionStyled>
  );
};

export const AppMain: React.FC = () => {
  return (
    <AppMainStyled>
      <div className="app-main-content">
        <WelcomeBoard />
        <CurrentCourseSection />
        <RecommendedCourseSection courses={courseData} />
      </div>

      <AnnouncementTab />
    </AppMainStyled>
  );
};
