import { useState } from 'react';
import { HazardCategory } from '../models/report';

export function useReportForm(onSent: () => void) {
  const [category, setCategory] = useState<HazardCategory | null>(null);
  const [description, setDescription] = useState('');
  const [error, setError] = useState<string | null>(null);

  const submit = () => {
    if (!category) {
      setError('Choose a hazard category.');
      return;
    }
    if (description.trim().length < 10) {
      setError('Describe the hazard in at least 10 characters.');
      return;
    }
    setCategory(null);
    setDescription('');
    setError(null);
    onSent();
  };

  return { category, setCategory, description, setDescription, error, submit };
}
