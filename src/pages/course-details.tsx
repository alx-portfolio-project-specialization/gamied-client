import { Quiz } from "../components/quiz";
import { quizzes } from "../data/accessment";
import {
  CourseAccesssmentAreaStyled,
  CourseDetailsStyled,
  CourseSideTabStyled,
} from "./course-details.styles";
import { Logo } from "../components/logo";
import { CourseAccordion } from "../components/course-accordion";
import { CountdownCircle } from "../components/countdown-circle";
import { useCountdownLogic } from "../hooks/use-countdown-logic";

export const CourseSideTab: React.FC = () => {
  return (
    <CourseSideTabStyled>
      <Logo />

      <div className="course-side-tab-body">
        <CourseAccordion variant="details" />
      </div>
    </CourseSideTabStyled>
  );
};

export const CourseDetails: React.FC = () => {
  const {
    formRef,
    formData,
    setFormData,
    countdownRef,
    setCountdownTime,
    calcCountdownTime,
    calcDuration
  } = useCountdownLogic();

  return (
    <CourseDetailsStyled>
      <CourseSideTab />

      <CourseAccesssmentAreaStyled className="course-accessment-area">
        <div className="accessment-cta-area">
          <button className="accessment-cta">
            <span>
              <svg>
                <use xlinkHref="#share"></use>
              </svg>
            </span>
            share
          </button>

          <button className="accessment-cta">
            <span>
              <svg>
                <use xlinkHref="#return-back"></use>
              </svg>
            </span>
            back to course
          </button>
        </div>

        <div className="accessment-countdown-area">
          <div className="countdown-area-left">
            <p>Examination</p>
          </div>
          <div className="countdown-area-right">
            <CountdownCircle
              duration={50}
              setCountdownTime={setCountdownTime}
            />
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
      </CourseAccesssmentAreaStyled>
    </CourseDetailsStyled>
  );
};
