import { mockReports } from '../services/mockReports';
import { HAZARD_CATEGORIES } from '../models/report';

export function useHotspots() {
  const rows = HAZARD_CATEGORIES.map((c) => ({
    category: c,
    count: mockReports.filter((r) => r.category === c).length,
  }));

  const sorted = [...rows].sort((a, b) => b.count - a.count);
  const max = Math.max(...rows.map((r) => r.count), 1);

  return { rows: sorted, max, total: mockReports.length, top: sorted[0] };
}
