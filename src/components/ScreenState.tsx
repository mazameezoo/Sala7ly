import { View, Text, Pressable, ActivityIndicator, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, textStyles } from '../theme';
import Logo from './Logo';

export function LoadingState({ label = 'Loading…' }: { label?: string }) {
  return (
    <View style={styles.wrap}>
      <ActivityIndicator size="large" color={colors.accent} />
      <Text style={styles.message}>{label}</Text>
    </View>
  );
}

export function EmptyState({ title, message }: { title: string; message: string }) {
  return (
    <View style={styles.wrap}>
      <View style={styles.faded}>
        <Logo size={72} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

export function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <View style={styles.wrap}>
      <Ionicons name="cloud-offline-outline" size={56} color={colors.error} />
      <Text style={styles.title}>Something went wrong</Text>
      <Text style={styles.message}>{message}</Text>
      <Pressable style={styles.button} onPress={onRetry}>
        <Text style={textStyles.button}>Try again</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center', justifyContent: 'center', paddingVertical: spacing.xxl, gap: spacing.ms },
  faded: { opacity: 0.6 },
  title: { ...textStyles.heading, textAlign: 'center' },
  message: { ...textStyles.body, color: colors.textMuted, textAlign: 'center', paddingHorizontal: spacing.lg },
  button: { marginTop: spacing.sm, minHeight: 48, paddingHorizontal: spacing.lg, borderRadius: radius.control, backgroundColor: colors.accent, alignItems: 'center', justifyContent: 'center' },
});
