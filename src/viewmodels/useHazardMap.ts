import { useState } from 'react';
import { mockReports } from '../services/mockReports';

export function useHazardMap() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const hazards = mockReports;
  const selected = hazards.find((h) => h.id === selectedId) ?? null;

  const select = (id: string) => setSelectedId(id);
  const clear = () => setSelectedId(null);

  return { hazards, selected, select, clear };
}
