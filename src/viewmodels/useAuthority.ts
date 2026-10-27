import { useState } from 'react';
import { Report, ReportStatus } from '../models/report';
import { mockReports } from '../services/mockReports';

const nextStatus: Record<ReportStatus, ReportStatus | null> = {
  submitted: 'verified',
  verified: 'fixed',
  fixed: null,
};

export function useAuthority() {
  const [reports, setReports] = useState<Report[]>(mockReports);

  const advance = (id: string) => {
    setReports(
      reports.map((r) => {
        const next = nextStatus[r.status];
        return r.id === id && next ? { ...r, status: next } : r;
      })
    );
  };

  const openCount = reports.filter((r) => r.status !== 'fixed').length;

  return { reports, advance, openCount, nextStatus };
}
