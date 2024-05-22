import type { CSSProperties } from "react";
import { AnnouncementTab } from "./announcement-tab";
import {
  AppMainStyled,
  CurrentCourseSectionStyled,
  RecommendedCourseSectionStyled,
  WelcomeBoardStyled,
} from "./app-main.styles";

const WelcomeBoard: React.FC = () => {
  return (
    <WelcomeBoardStyled>
      <div className="wp-left">
        <span>welcome,</span>
        <h2>John Doe</h2>
      </div>
      <div className="wp-right">
        <img
          src="../../public/illustrations/community-learning.png"
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
        <div className="course-card">
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
        </div>
      </div>
    </CurrentCourseSectionStyled>
  );
};

const RecommendedCourseSection: React.FC = () => {
  return (
    <RecommendedCourseSectionStyled>
      <div className="rcs-top">
        <p className="home-section-title">Recommended Courses</p>
      </div>
      <div className="rcs-bottom">
        <ul className="list-course-cards">
          <li className="list-course-card">
            <div className="list-course-card-top">
              <img src="../../public/images/programming-1.jpg" alt="" />
            </div>
            <div className="list-course-card-bottom">
              <p>Introduction to programming</p>
              <div className="count-and-cta-div">
                <h3>28 lessons</h3>
                <button className="list-course-cta">Enroll now</button>
              </div>
            </div>
          </li>

          <li className="list-course-card">
            <div className="list-course-card-top">
              <img src="../../public/images/sticky-notes-introduction.jpg" alt="" />
            </div>
            <div className="list-course-card-bottom">
              <p className="course-card-title">Introduction to programming</p>
              <div className="count-and-cta-div">
                <h3>28 lessons</h3>
                <button className="list-course-cta">Enroll now</button>
              </div>
            </div>
          </li>

          <li className="list-course-card">
            <div className="list-course-card-top">
              <img src="../../public/images/building-soft-skills.jpg" alt="" />
            </div>
            <div className="list-course-card-bottom">
              <p className="course-card-title">Introduction to programming</p>
              <div className="count-and-cta-div">
                <h3>28 lessons</h3>
                <button className="list-course-cta">Enroll now</button>
              </div>
            </div>
          </li>

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
        <RecommendedCourseSection />
      </div>

      <AnnouncementTab />
    </AppMainStyled>
  );
};
