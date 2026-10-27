import { View, ScrollView, StyleSheet } from 'react-native';
import Text from '../components/AppText';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, radius, font } from '../theme';
import FadeInCard from '../components/FadeInCard';
import PressableScale from '../components/PressableScale';
import { useNotifications } from '../viewmodels/useNotifications';

export default function NotificationsScreen() {
  const vm = useNotifications();

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.muted}>{vm.unread} unread</Text>
      {vm.notifications.map((n, i) => {
        const read = vm.isRead(n.id);
        return (
          <FadeInCard key={n.id} index={i}>
            <PressableScale style={[styles.card, read && styles.cardRead]} onPress={() => vm.markRead(n.id)}>
              <Ionicons
                name={read ? 'notifications-outline' : 'notifications'}
                size={22}
                color={read ? colors.muted : colors.primary}
              />
              <View style={styles.flex}>
                <Text style={styles.title}>{n.title}</Text>
                <Text style={styles.body}>{n.body}</Text>
                <Text style={styles.muted}>{n.time}</Text>
              </View>
            </PressableScale>
          </FadeInCard>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, gap: spacing.md },
  flex: { flex: 1, gap: 4 },
  card: { flexDirection: 'row', gap: spacing.md, backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.md },
  cardRead: { opacity: 0.6 },
  title: { color: colors.text, fontSize: font.body, fontWeight: '700' },
  body: { color: colors.text, fontSize: font.small },
  muted: { color: colors.muted, fontSize: font.small },
});
