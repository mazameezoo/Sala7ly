import { View, Text, StyleSheet } from 'react-native';
import { ReportStatus } from '../models/report';
import { status as statusColors, radius, spacing, font } from '../theme';

const labels: Record<ReportStatus, string> = {
  submitted: 'Submitted',
  verified: 'Verified',
  fixed: 'Fixed',
};

export default function StatusPill({ status }: { status: ReportStatus }) {
  const color = statusColors[status];
  return (
    <View style={[styles.pill, { backgroundColor: color + '26' }]}>
      <Text style={[styles.text, { color }]}>{labels[status]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: { paddingHorizontal: spacing.md - 4, paddingVertical: 6, borderRadius: radius.pill },
  text: { fontSize: font.small, fontWeight: '700' },
});
