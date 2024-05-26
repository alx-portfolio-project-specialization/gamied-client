export interface AnnouncementItem {
  target: "creators" | "students";
  title: string;
  details?: string;
  dateDelivered: string;
}

export interface AnnouncementGroupType {
  announcementDate: string;
  announcements: AnnouncementItem[];
}

export type RankRange = 1 | 2 | 3 | 4 | 5 | 6;

export interface RankType {
  level: RankRange;
  title: string;
  icon: string;
  xpRange: { max: number; min: number };
}

export interface CourseAttemptType {
  lessonCount: number;
  title: string;
  percentageCompleted: number;
  courseURL: string;
}

export interface UserType {
  avatarURL: string;
  name: string;
  email: string;
  isLoggedIn: boolean;
  role: "creator" | "student";
}

export interface ProfileType {
  user: UserType;
}

export interface StudentProfileType extends ProfileType {
  currentRank: RankRange;
  ranks: {
    value: RankRange;
    dateAttained: string;
  }[];
  attemptedCourses: CourseAttemptType[] | null;
}

export interface QuizOptionType {
  correct: boolean;
  text: string;
  quizID: string;
  id: string;
}
export interface QuizType {
  id: string;
  question: string;
  options: QuizOptionType[];
}

export interface CreatorProfileType extends ProfileType {}

export interface CourseEntryType {
  imageUrl: string;
  title: string;
  lessonCount: number;
  progress: number;
  id: number;
}

export type CourseListType = CourseEntryType[];
