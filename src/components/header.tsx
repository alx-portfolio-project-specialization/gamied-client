import { HeaderSearchBoxStyled, HeaderStyled } from "./header.styles";

const HeaderSearchBox: React.FC = () => {
  return <HeaderSearchBoxStyled>

  </HeaderSearchBoxStyled>
};

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <div className="header-left">
        <HeaderSearchBox />
      </div>
      <div className="header-right">

      </div>
    </HeaderStyled>
  );
};
