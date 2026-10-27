import { AppNotification } from '../models/notification';

export const mockNotifications: AppNotification[] = [
  { id: '1', title: 'Report verified', body: 'Your pothole report was verified by 3 drivers.', time: '10 min ago' },
  { id: '2', title: 'Hazard fixed', body: 'The broken light you reported has been fixed.', time: '2 hours ago' },
  { id: '3', title: 'New hazard nearby', body: 'Flooding reported 500 m from you.', time: 'Yesterday' },
  { id: '4', title: 'Report received', body: 'We received your accident report.', time: '2 days ago' },
];
