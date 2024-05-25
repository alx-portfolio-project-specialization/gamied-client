import { Outlet } from "react-router-dom";
import { RootWrapperStyled } from "./components/root-wrapper.styles";
import { SideTab } from "./components/side-tab";
import { Header } from "./components/header";

const App: React.FC<{ variant: "side-tab" | "no-side-tab" }> = ({
  variant,
}) => {
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
