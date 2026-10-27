import { View, ScrollView, StyleSheet } from 'react-native';
import Text from '../../components/AppText';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, font } from '../../theme';
import { mockReports } from '../../services/mockReports';

export default function MapWebScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Hazard map</Text>
      <Text style={styles.muted}>The map is available on the phone app.</Text>
      {mockReports.map((r) => (
        <View key={r.id} style={styles.card}>
          <Ionicons name="location" size={22} color={colors.primary} />
          <View>
            <Text style={styles.cardTitle}>{r.category}</Text>
            <Text style={styles.muted}>{r.location}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, gap: spacing.md },
  title: { color: colors.text, fontSize: font.title, fontWeight: '700' },
  card: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.md },
  cardTitle: { color: colors.text, fontSize: font.body, fontWeight: '700' },
  muted: { color: colors.muted, fontSize: font.small },
});
