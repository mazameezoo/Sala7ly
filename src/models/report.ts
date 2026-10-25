
export interface Report {
  id: string;
  category: HazardCategory;
  location: string;
  createdAt: string;
  status: ReportStatus;
  verifications: number;
}
