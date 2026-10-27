import { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, SpaceGrotesk_500Medium, SpaceGrotesk_700Bold } from '@expo-google-fonts/space-grotesk';
import { Cairo_600SemiBold, Cairo_800ExtraBold, Cairo_900Black } from '@expo-google-fonts/cairo';
import { colors, fonts } from '../theme';

SplashScreen.preventAutoHideAsync();

const header = {
  headerShown: true,
  headerStyle: { backgroundColor: colors.background },
  headerTintColor: colors.textPrimary,
  headerBackTitle: 'Back',
  headerTitleStyle: { fontFamily: fonts.latinBold },
};

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceGrotesk_500Medium,
    SpaceGrotesk_700Bold,
    Cairo_600SemiBold,
    Cairo_800ExtraBold,
    Cairo_900Black,
  });

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: colors.background } }}>
      <Stack.Screen name="hazard/[id]" options={{ ...header, title: 'Hazard details' }} />
      <Stack.Screen name="report/[id]" options={{ ...header, title: 'Report status' }} />
      <Stack.Screen name="camera" options={{ ...header, title: 'Add photo' }} />
      <Stack.Screen name="stats" options={{ ...header, title: 'Hotspot stats' }} />
      <Stack.Screen name="notifications" options={{ ...header, title: 'Notifications' }} />
      <Stack.Screen name="confirmation" options={{ gestureEnabled: false }} />
      <Stack.Screen name="splash" options={{ gestureEnabled: false }} />
    </Stack>
  );
}
