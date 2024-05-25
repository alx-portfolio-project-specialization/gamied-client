import { Logo } from "./logo";
import { SideTabStyled } from "./side-tab.styles";

export const SideTab: React.FC = () => {
  return (
    <SideTabStyled>
      <Logo />

      <div className="side-tab-body">
        <ul className="nav-list">
          <li className="nav-item nested">
            <div>
              <span>
                <svg>
                  <use xlinkHref="#dashboard"></use>
                </svg>
              </span>
              <a href="" className="active">
                Dashboard
              </a>
            </div>

            <div className="sub-nav-list">
              <span className="sub-nav-item">
                <span></span>
                <a href="" className="active">
                  my courses
                </a>
              </span>
              <span className="sub-nav-item">
                <span></span> <a href="">my activities</a>
              </span>
              <span className="sub-nav-item">
                <span></span> <a href="">profile</a>
              </span>
              <span className="sub-nav-item">
                <span></span> <a href="">some other item</a>
              </span>
            </div>
          </li>

          <li className="nav-item">
            <div>
              <span>
                <svg>
                  <use xlinkHref="#course"></use>
                </svg>
              </span>
              <a href="">All Courses</a>
            </div>
          </li>

          <li className="nav-item">
            <div>
              <span>
                <svg>
                  <use xlinkHref="#analytics"></use>
                </svg>
              </span>
              <a href="">Assessments</a>
            </div>
          </li>
        </ul>

        <div className="side-tab-cta-div">
          <button>
            LOGIN / SIGNUP{" "}
            <span>
              <svg>
                <use xlinkHref="#login"></use>
              </svg>
            </span>
          </button>
        </div>

        <div className="side-tab-notif-box">
          <p className="notif-text">
            Explore Other Courses to expand on your knowlege
          </p>

          <button className="notif-box-cta">explore</button>
        </div>
      </div>
    </SideTabStyled>
  );
};
