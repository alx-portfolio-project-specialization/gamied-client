import { HeaderSearchBoxStyled, HeaderStyled } from "./header.styles";

const HeaderSearchBox: React.FC = () => {
  return (
    <HeaderSearchBoxStyled>
      <input type="search" name="" id="" />

      <span className="search-icon">
        <input type="submit" value="" />
        <svg>
          <use xlinkHref="#search"></use>
        </svg>
      </span>
    </HeaderSearchBoxStyled>
  );
};

export const Header: React.FC<{ variant: "side-tab" | "no-side-tab" }> = ({
  variant,
}) => {
  return (
    <HeaderStyled className={`${variant === "no-side-tab" ? "shrink" : ""}`}>
      <div className="header-left">
        <HeaderSearchBox />
      </div>
      <div className="header-right">
        <span className="notif-icon-area">
          <svg>
            <use xlinkHref="#bell"></use>
          </svg>
          <span className="notif-icon-shadow"></span>
        </span>
        <div className="profile-summary-area">
          <span className="summary-area-text">john doe</span>
          <img
            src="/illustrations/avatar1.jpg"
            alt="avatar image of the user of the gamied platform"
            className="summary-area-image"
          />
        </div>
      </div>
    </HeaderStyled>
  );
};
