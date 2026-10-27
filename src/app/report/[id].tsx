import { View, StyleSheet } from 'react-native';
import Text from '../../components/AppText';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { colors, status, spacing, radius, font } from '../../theme';
import StatusPill from '../../components/StatusPill';
import { useReportStatus } from '../../viewmodels/useReportStatus';

export default function ReportStatusScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const vm = useReportStatus(id);

  if (!vm.report) {
    return (
      <View style={styles.center}>
        <Ionicons name="alert-circle-outline" size={48} color={colors.muted} />
        <Text style={styles.muted}>This report was not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <View style={styles.flex}>
          <Text style={styles.title}>{vm.report.category}</Text>
          <Text style={styles.muted}>{vm.report.location} · {vm.report.createdAt}</Text>
        </View>
        <StatusPill status={vm.report.status} />
      </View>

      <Text style={styles.heading}>Progress</Text>

      <View style={styles.timeline}>
        {vm.steps.map((step, index) => {
          const color = step.done ? status[step.key] : colors.border;
          const isLast = index === vm.steps.length - 1;
          return (
            <View key={step.key} style={styles.stepRow}>
              <View style={styles.dotColumn}>
                <View style={[styles.dot, { backgroundColor: step.done ? color : colors.surface, borderColor: color }]}>
                  {step.done && <Ionicons name="checkmark" size={16} color={colors.onPrimary} />}
                </View>
                {!isLast && <View style={[styles.line, { backgroundColor: color }]} />}
              </View>
              <Text style={[styles.stepText, !step.done && styles.stepTextPending]}>{step.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, padding: spacing.md, gap: spacing.md },
  center: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', gap: spacing.sm },
  flex: { flex: 1 },
  summary: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.md },
  title: { color: colors.text, fontSize: font.heading, fontWeight: '700' },
  muted: { color: colors.muted, fontSize: font.body },
  heading: { color: colors.text, fontSize: font.heading, fontWeight: '700', marginTop: spacing.sm },
  timeline: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg },
  stepRow: { flexDirection: 'row', gap: spacing.md },
  dotColumn: { alignItems: 'center' },
  dot: { width: 28, height: 28, borderRadius: 14, borderWidth: 2, alignItems: 'center', justifyContent: 'center' },
  line: { width: 3, height: 36 },
  stepText: { color: colors.text, fontSize: font.body, fontWeight: '600', paddingTop: 3 },
  stepTextPending: { color: colors.muted },
});
