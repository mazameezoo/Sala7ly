import { useState } from 'react';

export function useProfile() {
  const [alertsOn, setAlertsOn] = useState(true);

  return {
    name: 'Mazen',
    email: 'mazen@example.com',
    alertsOn,
    setAlertsOn,
  };
}
