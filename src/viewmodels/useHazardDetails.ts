import { useState } from 'react';
import { mockReports } from '../services/mockReports';

export function useHazardDetails(id: string) {
  const hazard = mockReports.find((r) => String(r.id) === id);
  const [verified, setVerified] = useState(false);

  const count = (hazard?.verifications ?? 0) + (verified ? 1 : 0);
  const verify = () => setVerified(true);

  return { hazard, verified, count, verify };
}
