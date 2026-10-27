import { useEffect } from 'react';
import { useRouter } from 'expo-router';

export function useSplashRedirect(target: '/report', delay = 1500) {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => router.replace(target), delay);
    return () => clearTimeout(timer);
  }, []);
}
