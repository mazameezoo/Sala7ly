import { View, ScrollView, Pressable, StyleSheet } from 'react-native';
import Text from '../../components/AppText';
import { colors, spacing, radius, font } from '../../theme';
import StatusPill from '../../components/StatusPill';
import { useAuthority } from '../../viewmodels/useAuthority';

export default function AuthorityScreen() {
  const vm = useAuthority();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Authority dashboard</Text>

      <View style={styles.summary}>
        <Text style={styles.number}>{vm.openCount}</Text>
        <Text style={styles.label}>Open reports</Text>
      </View>

      {vm.reports.map((r) => {
        const next = vm.nextStatus[r.status];
        return (
          <View key={r.id} style={styles.card}>
            <View style={styles.row}>
              <View style={styles.flex}>
                <Text style={styles.cardTitle}>{r.category}</Text>
                <Text style={styles.cardSub}>{r.location}</Text>
                <Text style={styles.cardSub}>{r.verifications} verifications</Text>
              </View>
              <StatusPill status={r.status} />
            </View>

            {next && (
              <Pressable style={styles.button} onPress={() => vm.advance(r.id)}>
                <Text style={styles.buttonText}>Mark as {next}</Text>
              </Pressable>
            )}
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, gap: spacing.md, paddingBottom: spacing.xl },
  flex: { flex: 1 },
  title: { fontSize: font.title, fontWeight: '700', color: colors.text },
  summary: { backgroundColor: colors.surface, borderRadius: radius.lg, padding: spacing.lg, alignItems: 'center' },
  number: { fontSize: font.big, fontWeight: '800', color: colors.primary },
  label: { color: colors.muted, fontSize: font.body },
  card: { backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.md, gap: spacing.md },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  cardTitle: { color: colors.text, fontSize: font.body + 2, fontWeight: '700' },
  cardSub: { color: colors.muted, fontSize: font.small },
  button: { minHeight: 44, borderRadius: radius.md, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: colors.onPrimary, fontSize: font.body, fontWeight: '700' },
});
