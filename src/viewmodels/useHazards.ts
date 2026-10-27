import { useEffect, useState } from 'react';
import { Report, HazardCategory } from '../models/report';
import { fetchReports } from '../services/reportService';

export function useHazards() {
  const [all, setAll] = useState<Report[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<HazardCategory | 'All'>('All');

  const load = () => {
    setLoading(true);
    setError(null);
    fetchReports()
      .then(setAll)
      .catch(() => setError('Could not load hazards. Check your connection.'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    load();
  }, []);

  const hazards = filter === 'All' ? all : all.filter((r) => r.category === filter);

  return { hazards, filter, setFilter, loading, error, retry: load };
}
