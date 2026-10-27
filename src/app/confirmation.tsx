import { View, Pressable, StyleSheet } from 'react-native';
import Text from '../components/AppText';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, spacing, radius, font } from '../theme';

export default function ConfirmationScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <Ionicons name="checkmark-circle" size={96} color={colors.success} />
      <Text style={styles.title}>Report sent</Text>
      <Text style={styles.sub}>
        Thanks for helping keep the roads safe. Other drivers can now verify your report.
      </Text>

      <Pressable style={styles.button} onPress={() => router.replace('/report')}>
        <Text style={styles.buttonText}>Report another</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.secondary]} onPress={() => router.replace('/my-reports')}>
        <Text style={styles.secondaryText}>View my reports</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', padding: spacing.lg, gap: spacing.md },
  title: { color: colors.text, fontSize: font.title, fontWeight: '700' },
  sub: { color: colors.muted, fontSize: font.body, textAlign: 'center', marginBottom: spacing.md },
  button: { alignSelf: 'stretch', minHeight: 52, borderRadius: radius.md, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: colors.onPrimary, fontSize: font.body, fontWeight: '700' },
  secondary: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border },
  secondaryText: { color: colors.text, fontSize: font.body, fontWeight: '700' },
});
