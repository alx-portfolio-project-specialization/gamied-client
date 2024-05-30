import { Outlet, useLocation } from "react-router-dom";
import { RootWrapperStyled } from "./components/root-wrapper.styles";
import { SideTab } from "./components/side-tab";
import { Header } from "./components/header";

const App: React.FC<{ variant?: "side-tab" | "no-side-tab" }> = ({
  variant,
}) => {
  const location = useLocation();
  const paramsURL = new URLSearchParams(location.search);
  variant =
    variant ||
    (location.pathname.startsWith("/assessments/") &&
    paramsURL.get("course_id") &&
    paramsURL.get("lesson_id")
      ? "no-side-tab"
      : "side-tab");
  console.log("app's variant is ", variant);
  return (
    <div id="app">
      {(() => {
        if (variant === "side-tab") {
          return (
            <div className="side-tab-wrapper">
              <SideTab />
            </div>
          );
        }
      })()}

      <RootWrapperStyled className={variant === "no-side-tab" ? "compact" : ""}>
        <Header variant={variant} />
        <Outlet />
      </RootWrapperStyled>
    </div>
  );
};

export default App;
