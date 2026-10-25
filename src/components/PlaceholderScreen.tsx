import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, font } from '../theme';

export default function PlaceholderScreen({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.sub}>Screen coming soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.background, padding: spacing.lg },
  title: { fontSize: font.title, fontWeight: '600', color: colors.text },
  sub: { marginTop: spacing.sm, color: colors.muted, fontSize: font.body },
});
