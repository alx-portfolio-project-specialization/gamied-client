import { Outlet } from "react-router-dom";
import { RootWrapperStyled } from "./components/root-wrapper.styles";
import { SideTab } from "./components/side-tab";
import { Header } from "./components/header";

function App() {
  return (
    <div id="app">
      <div className="side-tab-wrapper">
        <SideTab />
      </div>

      <RootWrapperStyled>
        <Header />
        <Outlet />
      </RootWrapperStyled>
    </div>
  );
}

export default App;
