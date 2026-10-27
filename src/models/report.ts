export type HazardCategory = 'Pothole' | 'Broken light' | 'Accident' | 'Flooding';

export const HAZARD_CATEGORIES: HazardCategory[] = [
  'Pothole',
  'Broken light',
  'Accident',
  'Flooding',
];

export type ReportStatus = 'submitted' | 'verified' | 'fixed';

export interface Report {
  id: string;
  category: HazardCategory;
  location: string;
  createdAt: string;
  status: ReportStatus;
  verifications: number;
  latitude: number;
  longitude: number;
}
