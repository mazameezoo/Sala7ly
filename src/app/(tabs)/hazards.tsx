import { View, ScrollView, Pressable, StyleSheet } from 'react-native';
import Text from '../../components/AppText';
import { useRouter } from 'expo-router';
import { colors, spacing, radius, font } from '../../theme';
import { HAZARD_CATEGORIES } from '../../models/report';
import StatusPill from '../../components/StatusPill';
import FadeInCard from '../../components/FadeInCard';
import PressableScale from '../../components/PressableScale';
import { LoadingState, EmptyState, ErrorState } from '../../components/ScreenState';
import { useHazards } from '../../viewmodels/useHazards';

export default function HazardsScreen() {
  const router = useRouter();
  const vm = useHazards();
  const filters = ['All', ...HAZARD_CATEGORIES] as const;

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chips}>
        {filters.map((f) => {
          const active = vm.filter === f;
          return (
            <Pressable key={f} onPress={() => vm.setFilter(f)} style={[styles.chip, active && styles.chipActive]}>
              <Text style={[styles.chipText, active && styles.chipTextActive]}>{f}</Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {vm.loading && <LoadingState label="Loading hazards…" />}

      {!vm.loading && vm.error && <ErrorState message={vm.error} onRetry={vm.retry} />}

      {!vm.loading && !vm.error && vm.hazards.length === 0 && (
        <EmptyState title="No hazards here" message="Nothing reported in this category yet. Roads look clear!" />
      )}

      {!vm.loading && !vm.error && vm.hazards.map((h, i) => (
        <FadeInCard key={`${vm.filter}-${h.id}`} index={i}>
          <PressableScale
            style={styles.card}
            onPress={() => router.push({ pathname: '/hazard/[id]', params: { id: String(h.id) } })}
          >
            <View style={styles.flex}>
              <Text style={styles.cardTitle}>{h.category}</Text>
              <Text style={styles.muted}>{h.location}</Text>
            </View>
            <StatusPill status={h.status} />
          </PressableScale>
        </FadeInCard>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, gap: spacing.md },
  flex: { flex: 1, gap: 4 },
  chips: { gap: spacing.sm },
  chip: { minHeight: 44, paddingHorizontal: spacing.md, borderRadius: radius.pill, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, justifyContent: 'center' },
  chipActive: { backgroundColor: colors.accent, borderColor: colors.accent },
  chipText: { color: colors.textPrimary, fontSize: font.body },
  chipTextActive: { color: colors.accentText, fontWeight: '700' },
  card: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, backgroundColor: colors.surface, borderRadius: radius.card, padding: spacing.md },
  cardTitle: { color: colors.textPrimary, fontSize: font.body, fontWeight: '700' },
  muted: { color: colors.textMuted, fontSize: font.small },
});
