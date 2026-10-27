import { useState } from 'react';
import { mockNotifications } from '../services/mockNotifications';

export function useNotifications() {
  const [readIds, setReadIds] = useState<string[]>([]);

  const markRead = (id: string) => {
    if (!readIds.includes(id)) setReadIds([...readIds, id]);
  };

  const isRead = (id: string) => readIds.includes(id);
  const unread = mockNotifications.length - readIds.length;

  return { notifications: mockNotifications, markRead, isRead, unread };
}
