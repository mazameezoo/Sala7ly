import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, status as statusColors, spacing, radius, font } from '../../theme';
import ProgressRing from '../../components/ProgressRing';
import StatusPill from '../../components/StatusPill';
import { useMyReports, StatusFilter } from '../../viewmodels/useMyReports';

const FILTERS: { key: StatusFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'submitted', label: 'Submitted' },
  { key: 'verified', label: 'Verified' },
  { key: 'fixed', label: 'Fixed' },
];

export default function MyReportsScreen() {
  const vm = useMyReports();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>My reports</Text>

      <View style={styles.ringCard}>
        <ProgressRing
          progress={vm.fixedRatio}
          value={`${vm.counts.fixed}/${vm.total}`}
          label="Reports fixed"
        />
      </View>

      <View style={styles.statRow}>
        <View style={styles.stat}>
          <Text style={[styles.statNumber, { color: statusColors.submitted }]}>{vm.counts.submitted}</Text>
          <Text style={styles.statLabel}>Submitted</Text>
        </View>
        <View style={styles.stat}>
          <Text style={[styles.statNumber, { color: statusColors.verified }]}>{vm.counts.verified}</Text>
          <Text style={styles.statLabel}>Verified</Text>
        </View>
        <View style={styles.stat}>
          <Text style={[styles.statNumber, { color: statusColors.fixed }]}>{vm.counts.fixed}</Text>
          <Text style={styles.statLabel}>Fixed</Text>
        </View>
      </View>

      <View style={styles.chips}>
        {FILTERS.map((f) => {
          const active = vm.filter === f.key;
          return (
            <Pressable
              key={f.key}
              onPress={() => vm.setFilter(f.key)}
              style={[styles.chip, active && styles.chipActive]}
            >
              <Text style={[styles.chipText, active && styles.chipTextActive]}>{f.label}</Text>
            </Pressable>
          );
        })}
      </View>

      {vm.reports.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="document-text-outline" size={40} color={colors.muted} />
          <Text style={styles.emptyText}>No reports in this status yet.</Text>
        </View>
      ) : (
        vm.reports.map((r) => (
          <View key={r.id} style={styles.card}>
            <View style={styles.flex}>
              <Text style={styles.cardTitle}>{r.category}</Text>
              <Text style={styles.cardSub}>{r.location} · {r.createdAt}</Text>
              <Text style={styles.cardSub}>{r.verifications} verifications</Text>
            </View>
            <StatusPill status={r.status} />
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, gap: spacing.md, paddingBottom: spacing.xl },
  flex: { flex: 1, gap: 2 },
  title: { fontSize: font.title, fontWeight: '700', color: colors.text },
  ringCard: { alignItems: 'center', backgroundColor: colors.surface, borderRadius: radius.lg, paddingVertical: spacing.lg },
  statRow: { flexDirection: 'row', gap: spacing.sm },
  stat: { flex: 1, backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.md, alignItems: 'center' },
  statNumber: { fontSize: font.heading + 8, fontWeight: '800' },
  statLabel: { color: colors.muted, fontSize: font.small, marginTop: 2 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  chip: { minHeight: 44, paddingHorizontal: spacing.md, borderRadius: radius.pill, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, justifyContent: 'center' },
  chipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { color: colors.text, fontSize: font.body },
  chipTextActive: { color: colors.onPrimary, fontWeight: '700' },
  card: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.md },
  cardTitle: { color: colors.text, fontSize: font.body + 2, fontWeight: '700' },
  cardSub: { color: colors.muted, fontSize: font.small },
  empty: { alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.xl },
  emptyText: { color: colors.muted, fontSize: font.body },
});
