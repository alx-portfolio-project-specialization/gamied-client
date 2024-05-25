import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home.tsx";
import { Root } from "./pages/root.tsx";
import { Course } from "./pages/course.tsx";
import { Profile } from "./pages/profile.tsx";
import { CourseDetails } from "./pages/course-details.tsx";

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
        element: <CourseDetails/>
      }
    ],
  },
  {
    path: "*",
    element: <h2>ERROR: PAGE NOT FOUND</h2>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <>
    <Root />
  </>
  // </React.StrictMode>,
);
