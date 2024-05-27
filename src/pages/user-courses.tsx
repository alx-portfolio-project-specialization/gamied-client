import { useEffect, useRef } from "react";
import { CountdownCircleStyled } from "../components/countdown-circle.styles";
import { Pagination } from "../components/pagination";
import type { CourseEntryType, CourseListType } from "../types";
import { UserCoursesStyled } from "./user-courses.styles";

void Pagination;

export const StaticProgress: React.FC<{ entry: CourseEntryType }> = ({
  entry,
}) => {
  const progressRef = useRef<SVGCircleElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!progressRef || !textRef) return;
    const progressEl = progressRef.current as SVGCircleElement;

    const percentage = progressEl.getAttribute("data-value")!;
    const color = progressEl.getAttribute("data-stroke");
    const radius = progressEl.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const stroke = circumference - (circumference * +percentage) / 100;
    console.log("stroke is ", stroke);

    progressEl.style.setProperty("--stroke-dashoffset", stroke.toString());
    progressEl.style.setProperty(
      "--stroke-dasharray",
      circumference.toString()
    );
    progressEl.style.setProperty("--stroke", color);
  }, [progressRef]);

  return (
    <CountdownCircleStyled className="course-entry-progress">
      <div className="skill">
        <svg>
          <circle cx="17" cy="17" r="50%"></circle>
          <circle
            className="progress"
            cx="17"
            cy="17"
            r="50%"
            data-value={entry.progress}
            data-stroke="var(--countdown-circle-stroke-here)"
            ref={progressRef}
          ></circle>
        </svg>
        <span
          className="data-progress"
          data-value={entry.progress}
          ref={textRef}
        >
          {Math.round(entry.progress)}%
        </span>
      </div>
    </CountdownCircleStyled>
  );
};

export const UserCourses: React.FC<{ courses: CourseListType }> = ({
  courses,
}) => {
  return (
    <UserCoursesStyled>
      <div className="courses-top">
        <h2>my courses</h2>
      </div>
      <div className="courses-bottom">
        <ul className="courses-list-container">
          {courses.map((entry) => {
            return (
              <li className="course-card-wrapper">
                <div className="course-card-small">
                  <div className="top">
                    <img
                      src={entry.imageUrl}
                      alt="image representing a course card in a list of courses"
                    />
                  </div>
                  <div className="bottom">
                    <p className="card-bottom-text">{entry.title}</p>
                    <div className="course-circle-progress-wrapper">
                      <StaticProgress entry={entry} />
                    </div>
                    <div className="course-info-cta-area">
                      <p>{entry.lessonCount} lessons</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* <div className="courses-pagination-area">
          <Pagination itemsPerPage={5} key={1}/>
        </div> */}
      </div>
    </UserCoursesStyled>
  );
};
