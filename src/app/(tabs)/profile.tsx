import { View, Pressable, Switch, StyleSheet } from 'react-native';
import Text from '../../components/AppText';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, spacing, radius, font } from '../../theme';
import { useProfile } from '../../viewmodels/useProfile';

export default function ProfileScreen() {
  const router = useRouter();
  const vm = useProfile();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={36} color={colors.onPrimary} />
        </View>
        <Text style={styles.name}>{vm.name}</Text>
        <Text style={styles.muted}>{vm.email}</Text>
      </View>

      <Pressable style={styles.row} onPress={() => router.push('/notifications')}>
        <Ionicons name="notifications-outline" size={22} color={colors.primary} />
        <Text style={styles.rowText}>Notifications</Text>
        <Ionicons name="chevron-forward" size={20} color={colors.muted} />
      </Pressable>

      <Pressable style={styles.row} onPress={() => router.push('/stats')}>
        <Ionicons name="bar-chart-outline" size={22} color={colors.primary} />
        <Text style={styles.rowText}>Hotspot stats</Text>
        <Ionicons name="chevron-forward" size={20} color={colors.muted} />
      </Pressable>

      <View style={styles.row}>
        <Ionicons name="alarm-outline" size={22} color={colors.primary} />
        <Text style={styles.rowText}>Nearby hazard alerts</Text>
        <Switch
          value={vm.alertsOn}
          onValueChange={vm.setAlertsOn}
          trackColor={{ true: colors.primary, false: colors.border }}
        />
      </View>

      <Pressable style={styles.signOut} onPress={() => router.replace('/login')}>
        <Text style={styles.signOutText}>Sign out</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, padding: spacing.md, gap: spacing.md },
  header: { alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.lg },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  name: { color: colors.text, fontSize: font.title, fontWeight: '700' },
  muted: { color: colors.muted, fontSize: font.small },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.md, minHeight: 56 },
  rowText: { flex: 1, color: colors.text, fontSize: font.body },
  signOut: { minHeight: 52, borderRadius: radius.md, borderWidth: 1, borderColor: colors.danger, alignItems: 'center', justifyContent: 'center', marginTop: spacing.md },
  signOutText: { color: colors.danger, fontSize: font.body, fontWeight: '700' },
});
