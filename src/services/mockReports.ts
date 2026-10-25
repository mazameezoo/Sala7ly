import { Report } from '../models/report';

export const mockReports: Report[] = [
  { id: '1', category: 'Pothole', location: 'Main St', createdAt: 'Today, 9:40', status: 'submitted', verifications: 1 },
  { id: '2', category: 'Broken light', location: '5th Ave', createdAt: 'Yesterday', status: 'verified', verifications: 4 },
  { id: '3', category: 'Flooding', location: 'Ring Rd', createdAt: '3 days ago', status: 'fixed', verifications: 7 },
  { id: '4', category: 'Accident', location: 'Nile Corniche', createdAt: 'Last week', status: 'fixed', verifications: 12 },
  { id: '5', category: 'Pothole', location: 'University Rd', createdAt: 'Last week', status: 'verified', verifications: 3 },
];
