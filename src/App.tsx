import { AppMain } from "./components/app-main";
import { Header } from "./components/header";
import { RootWrapperStyled } from "./components/root-wrapper.styles";
import { SideTab } from "./components/side-tab";

function App() {

  return (
    <div id="app">

      <div className="side-tab-wrapper">
        <SideTab/>
      </div>

      <RootWrapperStyled>
        <Header/>
        <AppMain/>
      </RootWrapperStyled>
    </div>
  );
}

export default App;
