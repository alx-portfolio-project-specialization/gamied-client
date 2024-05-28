import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Logo } from "./logo";
import { SideTabStyled } from "./side-tab.styles";

export const SideTab: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
              <NavLink
                to="/dashboard"
                className={
                  location.pathname.startsWith("/dashboard") ? "active" : ""
                }
              >
                Dashboard
              </NavLink>
            </div>

            <div className="sub-nav-list">
              <span className="sub-nav-item">
                <span></span>
                <Link
                  to="/dashboard/courses"
                  className={
                    location.pathname === "/dashboard/courses" ? "active" : ""
                  }
                >
                  my courses
                </Link>
              </span>
              <span className="sub-nav-item">
                <span></span> <Link to="">my activities</Link>
              </span>
              <span className="sub-nav-item">
                <span></span>{" "}
                <Link
                  to="/dashboard"
                  className={location.pathname === "/dashboard" ? "active" : ""}
                >
                  profile
                </Link>
              </span>
              {/* <span className="sub-nav-item">
                <span></span> <a href="">some other item</a>
              </span> */}
            </div>
          </li>

          <li className="nav-item">
            <div>
              <span>
                <svg>
                  <use xlinkHref="#course"></use>
                </svg>
              </span>
              <Link to="/courses">All Courses</Link>
            </div>
          </li>

          <li className="nav-item">
            <div>
              <span>
                <svg>
                  <use xlinkHref="#analytics"></use>
                </svg>
              </span>
              <Link
                to=""
                className={location.pathname === "/assessments" ? "active" : ""}
              >
                Assessments
              </Link>
            </div>
          </li>
        </ul>

        <div className="side-tab-cta-div">
          <button
            onMouseDown={() => {
              navigate("/auth");
            }}
          >
            LOGIN / SIGNUP
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
