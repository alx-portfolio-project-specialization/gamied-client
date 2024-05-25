import React, { useMemo } from "react";
import {
  CreatorProfileBottomStyled,
  GenericProfileStyled,
  StudentProfileBottomStyled,
} from "./profile.styles";
import { RankCompleteIcon } from "../components/rank-complete-icon";
import { CreatorProfileType, StudentProfileType } from "../types";
import { rankData } from "../data/user-rank";
import { userProfile } from "../data/profile-data";
import { WideCourseCard } from "../components/wide-course-card";

export const RankList: React.FC<{
  userProfile: StudentProfileType;
}> = ({ userProfile }) => {
  const userRanks = useMemo(
    () => userProfile.ranks.sort((a, b) => a.value - b.value),
    [userProfile]
  );

  return (
    <ul className="ranks">
      {rankData.map((entry, index) => {
        const completed = userRanks.length - 1 >= index;
        return (
          <li key={index}>
            <span className="complete-indicator">
              <RankCompleteIcon completed={completed} />
            </span>
            <div className="rank-details">
              <img src="" alt="" className="rank-icon" />
              <p className="rank-title">{entry.title}</p>
              <h3 className="rank-date">{`${
                userRanks.length && completed
                  ? userRanks[index].dateAttained
                  : ""
              }`}</h3>
            </div>
            <div className="rank-badge">
              <p>
                ({entry.xpRange.min} - {entry.xpRange.max}) XP
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export const GenericProfile: React.FC<{
  userProfile: StudentProfileType | CreatorProfileType;
}> = ({ userProfile }) => {
  return (
    <GenericProfileStyled>
      <section className="profile-top">
        <div className="profile-info-area">
          <div className="profile-info-image-wrapper">
            <img src="" alt="" />
            <span className="profile-role-badge">{userProfile.user.role}</span>
          </div>
          <form className="profile-credentials-editable">
            <input
              type="text"
              name=""
              id="profile-name-editable"
              defaultValue={userProfile.user.name}
            />
            <input
              type="email"
              name=""
              id="profile-email-editable"
              defaultValue={userProfile.user.email}
            />

            {(() =>
              userProfile.user.role === "student" ? (
                <div className="profile-rank-display-area">
                  <span>Rank</span>
                  <div className="profile-rank-display">
                    <span>
                      <img
                        src={`${
                          rankData[
                            (userProfile as StudentProfileType).currentRank - 1
                          ].icon
                        }`}
                        alt="an icon displaying a student rank badge"
                      />
                    </span>
                    <p>{`${
                      rankData[
                        (userProfile as StudentProfileType).currentRank - 1
                      ].title
                    }`}</p>
                  </div>
                </div>
              ) : null)()}

            <button type="submit">save changes</button>
          </form>
        </div>

        {(() =>
          userProfile.user.role === "student" ? (
            <div className="student-profile-ranks-area">
              <h2>completed ranks</h2>
              <div className="ranks-wrapper">
                <RankList userProfile={userProfile as StudentProfileType} />
              </div>
            </div>
          ) : null)()}
      </section>

      {(() =>
        userProfile.user.role === "student" ? (
          <StudentProfileBottom />
        ) : userProfile.user.role === "creator" ? (
          <CreatorProfileBottom />
        ) : null)()}
    </GenericProfileStyled>
  );
};

export const StudentProfileBottom: React.FC = () => {
  console.log("rendering student profile bottom");
  return (
    <StudentProfileBottomStyled>
      <div className="profile-bottom-title-div">
        <p>Attempted Courses</p>
        <button>view all courses</button>
      </div>

      <div className="attempted-courses-area">
        <ul>
          <li>
            <WideCourseCard />
          </li>
          <li>
            <WideCourseCard />
          </li>
        </ul>
      </div>
    </StudentProfileBottomStyled>
  );
};

export const CreatorProfileBottom: React.FC = () => {
  return <CreatorProfileBottomStyled></CreatorProfileBottomStyled>;
};

// [PROTECTED]
export const Profile: React.FC = () => {
  return <GenericProfile userProfile={userProfile} />;
};
