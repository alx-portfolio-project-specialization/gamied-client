export interface AnnouncementItem {
  target: "creators" | "students";
  title: string;
  details: string;
  dateDelivered: string;
}

export interface AnnouncementGroupType {
  announcementDate: string;
  announcements: AnnouncementItem[];
}
