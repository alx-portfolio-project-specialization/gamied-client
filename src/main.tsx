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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App variant={"side-tab"} />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "courses",
        element: <Courses/>,
        children: [
          {
            path: ":course_id",
            element: <Course/>,
          },
          {
            index: true,
            element: <UserCourses courses={courseData} isGeneric={true} />,
          },
        ]
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
            element: <UserCourses courses={courseData} isGeneric={false} />,
          },
          {
            path: "assessments",
            element: <Assessments/>,
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
    path: "/courses/:course_id/details",
    element: <App variant={"no-side-tab"} />,
    children: [
      {
        index: true,
        element: <CourseDetails />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
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
