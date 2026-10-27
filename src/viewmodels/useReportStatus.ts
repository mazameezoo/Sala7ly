import { ReportStatus } from '../models/report';
import { mockReports } from '../services/mockReports';

const order: ReportStatus[] = ['submitted', 'verified', 'fixed'];

const titles: Record<ReportStatus, string> = {
  submitted: 'Report submitted',
  verified: 'Verified by drivers',
  fixed: 'Fixed by the authority',
};

export function useReportStatus(id: string) {
  const report = mockReports.find((r) => r.id === id) ?? null;
  const reached = report ? order.indexOf(report.status) : -1;

  const steps = order.map((key, index) => ({
    key,
    title: titles[key],
    done: index <= reached,
  }));

  return { report, steps };
}
