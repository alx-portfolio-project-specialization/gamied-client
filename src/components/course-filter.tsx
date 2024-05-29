import { filterData } from "../data/course-filter";
import { CourseFilterSelect } from "./course-filter-select";
import { CourseFilterStyled } from "./course-filter.styles";

export const CourseFilter: React.FC = () => {
  return (
    <CourseFilterStyled>
      <div className="filter-controller-area">
        <h2>filter results</h2>
        <div className="filter-controller-parent">
          <span className="filter-icon">
            <svg>
              <use xlinkHref="#filter"></use>
            </svg>
          </span>
          <span className="chevron-icon">
            <svg>
              <use xlinkHref="#caret-up"></use>
            </svg>
          </span>
        </div>
      </div>

      <div className="filter-select-area">
        <ul className="filter-select-parent">
          {filterData.map((entry, idx) => {
            return <CourseFilterSelect data={entry} key={idx} />;
          })}
        </ul>
        <button className="filter-select-cta">Apply Filter</button>
      </div>
    </CourseFilterStyled>
  );
};
