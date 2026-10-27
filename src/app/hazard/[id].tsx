import { View, Pressable, StyleSheet } from 'react-native';
import Text from '../../components/AppText';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { colors, spacing, radius, font } from '../../theme';
import StatusPill from '../../components/StatusPill';
import { useHazardDetails } from '../../viewmodels/useHazardDetails';

export default function HazardDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const vm = useHazardDetails(String(id));

  if (!vm.hazard) {
    return (
      <View style={styles.screen}>
        <Text style={styles.title}>Hazard not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>{vm.hazard.category}</Text>
        <StatusPill status={vm.hazard.status} />
        <View style={styles.row}>
          <Ionicons name="location-outline" size={20} color={colors.primary} />
          <Text style={styles.text}>{vm.hazard.location}</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="people-outline" size={20} color={colors.primary} />
          <Text style={styles.text}>{vm.count} drivers verified this</Text>
        </View>
      </View>

      <Pressable
        style={[styles.button, vm.verified && styles.disabled]}
        onPress={vm.verify}
        disabled={vm.verified}
      >
        <Text style={styles.buttonText}>{vm.verified ? 'Verified' : 'Verify this hazard'}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, padding: spacing.md, gap: spacing.md },
  card: { backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.md, gap: spacing.md, alignItems: 'flex-start' },
  title: { color: colors.text, fontSize: font.title, fontWeight: '700' },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm },
  text: { color: colors.text, fontSize: font.body },
  button: { minHeight: 52, borderRadius: radius.md, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  disabled: { opacity: 0.5 },
  buttonText: { color: colors.onPrimary, fontSize: font.body, fontWeight: '700' },
});
