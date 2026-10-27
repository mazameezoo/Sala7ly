import { Report } from '../models/report';
import { mockReports } from './mockReports';

export const demoMode: 'normal' | 'empty' | 'error' = 'normal';

export function fetchReports(): Promise<Report[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (demoMode === 'error') reject(new Error('Network error'));
      else resolve(demoMode === 'empty' ? [] : mockReports);
    }, 800);
  });
}
