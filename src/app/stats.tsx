import { View, ScrollView, StyleSheet } from 'react-native';
import Text from '../components/AppText';
import { colors, spacing, radius, font } from '../theme';
import AnimatedBar from '../components/AnimatedBar';
import FadeInCard from '../components/FadeInCard';
import { useHotspots } from '../viewmodels/useHotspots';

export default function StatsScreen() {
  const vm = useHotspots();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.big}>{vm.total}</Text>
          <Text style={styles.muted}>Total reports</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.big}>{vm.top.category}</Text>
          <Text style={styles.muted}>Top hotspot</Text>
        </View>
      </View>

      <Text style={styles.heading}>Reports by type</Text>
      {vm.rows.map((r, i) => (
        <FadeInCard key={r.category} index={i}>
          <View style={styles.barCard}>
            <View style={styles.barHeader}>
              <Text style={styles.text}>{r.category}</Text>
              <Text style={styles.text}>{r.count}</Text>
            </View>
            <AnimatedBar ratio={r.count / vm.max} />
          </View>
        </FadeInCard>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, gap: spacing.md },
  row: { flexDirection: 'row', gap: spacing.md },
  card: { flex: 1, backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.md, gap: spacing.sm },
  big: { color: colors.primary, fontSize: font.heading, fontWeight: '700' },
  muted: { color: colors.muted, fontSize: font.small },
  heading: { color: colors.text, fontSize: font.heading, fontWeight: '700' },
  text: { color: colors.text, fontSize: font.body },
  barCard: { backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.md, gap: spacing.sm },
  barHeader: { flexDirection: 'row', justifyContent: 'space-between' },
});
