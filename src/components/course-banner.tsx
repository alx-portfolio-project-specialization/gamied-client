import { CourseBannerStyled } from "./course-banner.styles";

export const CourseBanner: React.FC = () => {
  return (
    <CourseBannerStyled>
      <img
        src="/images/blockchain.jpg"
        alt="the course banner image"
        className="banner-image"
      />
      <h3 className="course-creator-name-text">Professor John Doe's</h3>
      <h2 className="course-banner-title">introduction to blockchain</h2>
      <div className="course-banner-stat-div">
        <div className="stat-part">
          <span>
            <svg>
              <use xlinkHref="#levels"></use>
            </svg>
          </span>
          <p>Beginners</p>
        </div>

        <div className="stat-part">
          <span>
            <svg>
              <use xlinkHref="#clock"></use>
            </svg>
          </span>
          <p>2hr 15mins</p>
        </div>

        <div className="stat-part">
          <span>
            <svg>
              <use xlinkHref="#star-filled"></use>
            </svg>
          </span>
          <p>
            4.2 {"\u0009"} {"\u0009"} (244)
          </p>
        </div>
      </div>
      <button className="course-banner-cta">enroll</button>
    </CourseBannerStyled>
  );
};
