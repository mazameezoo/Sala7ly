import { useMemo, useState } from 'react';
import { ReportStatus } from '../models/report';
import { mockReports } from '../services/mockReports';

export type StatusFilter = 'all' | ReportStatus;

export function useMyReports() {
  const [filter, setFilter] = useState<StatusFilter>('all');

  const counts = useMemo(
    () => ({
      submitted: mockReports.filter((r) => r.status === 'submitted').length,
      verified: mockReports.filter((r) => r.status === 'verified').length,
      fixed: mockReports.filter((r) => r.status === 'fixed').length,
    }),
    []
  );

  const reports = filter === 'all' ? mockReports : mockReports.filter((r) => r.status === filter);
  const total = mockReports.length;
  const fixedRatio = total === 0 ? 0 : counts.fixed / total;

  return { reports, total, counts, fixedRatio, filter, setFilter };
}
