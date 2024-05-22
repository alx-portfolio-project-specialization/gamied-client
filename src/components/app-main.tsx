import { AnnouncementTab } from "./announcement-tab";
import {
  AppMainStyled,
  CurrentCourseSectionStyled,
  RecommendedCourseSectionStyled,
  WelcomeBoarStyled,
} from "./app-main.styles";

const WelcomeBoard: React.FC = () => {
  return (
    <WelcomeBoarStyled>
      <div className="wp-left"></div>
      <div className="wp-right"></div>
    </WelcomeBoarStyled>
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
        <div className="course-card"></div>
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
