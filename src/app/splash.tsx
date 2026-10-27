import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import Animated, { FadeIn, FadeInUp } from 'react-native-reanimated';
import { colors, spacing, textStyles } from '../theme';
import Logo from '../components/Logo';
import Wordmark from '../components/Wordmark';
import { useSplashRedirect } from '../viewmodels/useSplashRedirect';

export default function SplashScreen() {
  useSplashRedirect('/report');

  return (
    <View style={styles.screen}>
      <Animated.View entering={FadeIn.duration(500)}>
        <Logo size={120} />
      </Animated.View>
      <Animated.View entering={FadeInUp.delay(250).duration(500)} style={styles.brand}>
        <Wordmark size={48} />
        <Text style={styles.tagline}>صلّحلي… الطريق بايظ</Text>
      </Animated.View>
      <ActivityIndicator color={colors.accent} style={styles.spinner} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', gap: spacing.lg },
  brand: { alignItems: 'center', gap: spacing.sm },
  tagline: { ...textStyles.arabicBody, color: colors.accent },
  spinner: { marginTop: spacing.xl },
});
