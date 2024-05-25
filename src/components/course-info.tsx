import { CourseAccordion } from "./course-accordion";
import { CourseContentIcon } from "./course-content-icon";
import { CourseInfoStyled } from "./course-info.styles";
import { CourseStatInfo } from "./course-stat-info";

export const CourseInfo: React.FC = () => {
  return (
    <CourseInfoStyled>
      <h2 className="course-desc-title">About this course</h2>
      <p className="course-desc">
        This course aims to guide students through solving the problems of
        blockchain using tools and technologies that are well supported in the
        community
      </p>

      <div className="course-info-area">
        <div className="area-left">
          <ul className="horizontal-file-tab">
            <li>
              <a href="" className="active">
                <span>outline</span>
              </a>
            </li>
            <li>
              <a href="">
                <span>Reviews (980)</span>
              </a>
            </li>
          </ul>

          <div className="course-outline-area">
            <div className="coa-top">
              <div className="coa-top-left">
                <div>
                  <span>
                    <svg>
                      <use xlinkHref="#star-stroked"></use>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="coa-top-right">
                <h2>Course Outline</h2>
                <div className="course-outline-stat-div">
                  <p>41 lessons</p> <span></span>
                  <p>4hrs 30mins 28s Total length</p>
                </div>
              </div>
            </div>

            <div className="coa-bottom">
              <CourseAccordion variant="outline" />
            </div>
          </div>
        </div>
        <CourseStatInfo />
      </div>
    </CourseInfoStyled>
  );
};
