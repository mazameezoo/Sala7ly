import { Report } from '../models/report';

export const mockReports: Report[] = [
  { id: '1', category: 'Pothole', location: 'Main St', createdAt: 'Today, 9:40', status: 'submitted', verifications: 1, latitude: 30.0561, longitude: 31.2394 },
  { id: '2', category: 'Broken light', location: '5th Ave', createdAt: 'Yesterday', status: 'verified', verifications: 4, latitude: 30.0444, longitude: 31.2357 },
  { id: '3', category: 'Flooding', location: 'Ring Rd', createdAt: '3 days ago', status: 'fixed', verifications: 7, latitude: 30.0330, longitude: 31.2600 },
  { id: '4', category: 'Accident', location: 'Nile Corniche', createdAt: 'Last week', status: 'fixed', verifications: 12, latitude: 30.0500, longitude: 31.2300 },
  { id: '5', category: 'Pothole', location: 'University Rd', createdAt: 'Last week', status: 'verified', verifications: 3, latitude: 30.0390, longitude: 31.2480 },
];
