import { Quiz } from "../components/quiz";
import { quizzes } from "../data/accessment";
import {
  CourseAccesssmentAreaStyled,
  CourseDetailsStyled,
  CourseSideTabStyled,
  LessonContentBodyStyled,
} from "./course-details.styles";
import { Logo } from "../components/logo";
import { CourseAccordion } from "../components/course-accordion";
import { CountdownCircle } from "../components/countdown-circle";
import { useCountdownLogic } from "../hooks/use-countdown-logic";
import { courseDataDetailed } from "../data/course-list";
import { CourseDetailType, CourseLessonType } from "../types";
import { useLocation } from "react-router-dom";
import type { Location } from "react-router-dom";
import { NotFound } from "./not-found";

export const CourseSideTab: React.FC<{ course: CourseDetailType | null }> = ({
  course,
}) => {
  return (
    <CourseSideTabStyled>
      <Logo />

      <div className="course-side-tab-body">
        {course ?
          <>
            <p>{course.title}</p>
            <CourseAccordion variant="details" course={course} />
          </>
        : null}
      </div>
    </CourseSideTabStyled>
  );
};

export const AssessmentBody: React.FC<{ isLinkedResource: boolean }> = ({
  isLinkedResource,
}) => {
  const {
    formRef,
    formData,
    setFormData,
    countdownRef,
    setCountdownTime,
    calcCountdownTime,
    calcDuration,
  } = useCountdownLogic();
  return (
    <>
      <div className="accessment-cta-area">
        <button className="accessment-cta">
          <span>
            <svg>
              <use xlinkHref="#share"></use>
            </svg>
          </span>
          share
        </button>

        {isLinkedResource ? (
          <button className="accessment-cta">
            <span>
              <svg>
                <use xlinkHref="#return-back"></use>
              </svg>
            </span>
            back to course
          </button>
        ) : null}
      </div>

      <div className="accessment-countdown-area">
        <div className="countdown-area-left">
          <p>Examination</p>
        </div>
        <div className="countdown-area-right">
          <CountdownCircle duration={50} setCountdownTime={setCountdownTime} />
          <ul className="countdown-elapsed-area">
            <li ref={countdownRef}>
              <span>time left</span>
              {`${calcCountdownTime().hours}hr ${
                calcCountdownTime().minutes
              }min ${calcCountdownTime().seconds}s`}
            </li>
            <li>
              <span>duration</span>
              {`${calcDuration().hours}hr ${calcDuration().minutes}min ${
                calcDuration().seconds
              }s`}
            </li>
          </ul>
        </div>
      </div>

      <div className="accessment-description-area">
        <p>
          This quiz tests your basic understanding of the blockchain and its
          application
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
          for (const [key, value] of (formData as FormData).entries()) {
            console.log(`key: ${key}, value: ${value}`);
          }
          setFormData(new FormData());
        }}
      >
        <div className="accessment-wrapper">
          {quizzes.map((entry, idx) => {
            return (
              <Quiz
                value={entry}
                key={idx}
                key_={idx + 1}
                formData={formData as FormData}
                setFormData={setFormData}
              />
            );
          })}
        </div>

        <div className="quiz-cta-area">
          <button className="quiz-d" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
    </>
  );
};

export const LessonContentBody: React.FC<{
  contentID?: number;
  lesson: CourseLessonType;
}> = ({ contentID = 0, lesson }) => {
  const location = useLocation();
  const locationHashArray = location.hash.split("#");
  contentID =
    (locationHashArray.length >= 2 ? +locationHashArray[1] : null) ?? contentID;
  const content = lesson.contents.filter(
    (content) => content.id === contentID
  )[0];

  if (content) {
    return (
      <LessonContentBodyStyled>
        <h1>{lesson.courseTitle}</h1>
        <h2>Resource</h2>
        <div className="resource-header-div">
          <span>title: </span>
          <p>{`${content.title}`}</p>
        </div>
        <iframe src={content.href} frameBorder="0"></iframe>
      </LessonContentBodyStyled>
    );
  } else {
    return <NotFound />;
  }
};

type Combinable =
  | [true, { lessonID: string; courseID: string }]
  | [false, null];

const getLinkedResourceKeys: (
  location: Location,
  paramsURL: URLSearchParams
) => Combinable = (location, paramsURL) => {
  const locationArray = location.pathname.split("/");
  const courseIDKey = paramsURL.get("course_id");
  const lessonIDKey = paramsURL.get("lesson_id");
  if (
    (location.pathname.startsWith("/assessments/") &&
      courseIDKey?.length &&
      lessonIDKey?.length) ||
    (locationArray.length === 5 &&
      locationArray[1] === "courses" &&
      locationArray[3] === "lessons")
  ) {
    return [
      true,
      {
        courseID: (courseIDKey || locationArray[2]) as string,
        lessonID: (lessonIDKey || locationArray[4]) as string,
      },
    ] as Combinable;
  }
  return [false, null] as Combinable;
};

export const CourseDetails: React.FC = () => {
  const location = useLocation();
  const paramsURL = new URLSearchParams(location.search);
  let lesson: CourseLessonType | null = null; // get the lesson id, course id from the url either through params or search
  let course: CourseDetailType | null = null;

  const [isLinkedResource, linkedKeyObject] = getLinkedResourceKeys(
    location,
    paramsURL
  );

  console.log(isLinkedResource, linkedKeyObject);

  if (linkedKeyObject) {
    course = courseDataDetailed.filter(
      (course) => course.id === +linkedKeyObject.courseID
    )[0] as CourseDetailType;
    console.log(" course is ", course);
    if (course) {
      lesson = course.lessons.filter(
        (lesson) => lesson.id === +linkedKeyObject.lessonID
      )[0] as CourseLessonType;
      if (lesson) {
        lesson = { ...lesson, courseTitle: course.title };
      } else {
        lesson = null;
      }
    }
  }
  console.log(lesson, " is lesson");

  const isOfAssessmentType = location.pathname.startsWith("/assessments");

  return (
    <CourseDetailsStyled>
      <CourseSideTab course={course} />

      <CourseAccesssmentAreaStyled className="course-accessment-area">
        {isOfAssessmentType ? (
          <AssessmentBody isLinkedResource={isLinkedResource} />
        ) : lesson ? (
          <LessonContentBody lesson={lesson} />
        ) : (
          <NotFound />
        )}
      </CourseAccesssmentAreaStyled>
    </CourseDetailsStyled>
  );
};
