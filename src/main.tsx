import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home.tsx";
import { Root } from "./pages/root.tsx";
import { Course } from "./pages/course.tsx";
import { Profile } from "./pages/profile.tsx";
import { CourseDetails } from "./pages/course-details.tsx";
import { UserCourses } from "./pages/user-courses.tsx";
import { courseData } from "./data/course-list.ts";
import { Auth } from "./pages/auth.tsx";
import { NotFound } from "./pages/not-found.tsx";

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
        path: "courses/:course_id",
        element: <Course />,
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/courses",
        element: <UserCourses courses={courseData} />,
      },
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "courses/:course_id/details",
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
    element: <NotFound/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <>
    <Root />
  </>
  // </React.StrictMode>,
);
