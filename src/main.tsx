import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home.tsx";
import { Root } from "./pages/root.tsx";
import { Course } from "./pages/course.tsx";
import { GenericProfile, Profile } from "./pages/profile.tsx";
import { CourseDetails } from "./pages/course-details.tsx";
import { UserCourses } from "./pages/user-courses.tsx";
import { courseData } from "./data/course-list.ts";
import { Auth } from "./pages/auth.tsx";
import { NotFound } from "./pages/not-found.tsx";
import { userProfile as studentUserProfile } from "./data/profile-data.ts";
import { Courses } from "./pages/courses.tsx";
import { Assessments } from "./pages/assessments.tsx";
import { assessmentData } from "./data/assessments.ts";
import { userCoursesLoader } from "./loaders/user-courses.loader.ts";
// import { userCoursesAction } from "./actions/user-courses.action.ts";
import { rootLoader } from "./loaders/root.loader.ts";
import { authAction } from "./actions/auth.action.ts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App variant={"side-tab"} />,
    id: "root",
    loader: rootLoader,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses />,
        children: [
          {
            path: ":course_id",
            element: <Course />,
          },
          {
            index: true,
            element: <UserCourses isGeneric={true} />,
            loader: userCoursesLoader,
            // action: userCoursesAction,
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Profile />,
        children: [
          {
            index: true,
            element: <GenericProfile userProfile={studentUserProfile} />,
          },
          {
            path: "courses",
            element: <UserCourses isGeneric={false} />,
            loader: userCoursesLoader,
            // action: userCoursesAction,
          },
          {
            path: "assessments",
            element: <Assessments data={assessmentData} />,
          },
        ],
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/courses/:course_id/lessons/:lesson_id",
    element: <App variant={"no-side-tab"} />,
    loader: rootLoader,
    id: "lesson-root",
    children: [
      {
        index: true,
        element: <CourseDetails />,
      },
    ],
  },
  {
    element: <App />,
    loader: rootLoader,
    id: "assessment-root",
    children: [
      {
        path: "/assessments/:assessment_id",
        element: <CourseDetails />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />, // this is where creds are set and persisted
    action: authAction,
    // children: [
    //   {
    //     index: true,
    //     element: <CourseDetails />,
    //   },
    // ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <>
    <Root />
  </>
  // </React.StrictMode>,
);
