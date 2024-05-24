import { CourseBanner } from "../components/course-banner";
import { CourseInfo } from "../components/course-info";
import { CourseStyled } from "./course.styles";

export const Course: React.FC = () => {
  return (
    <CourseStyled>
      <CourseBanner />
      <CourseInfo />
    </CourseStyled>
  );
};
