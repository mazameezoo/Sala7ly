import { View, TextInput, Pressable, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Text from '../../components/AppText';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, spacing, radius, font } from '../../theme';
import { HAZARD_CATEGORIES } from '../../models/report';
import { useReportForm } from '../../viewmodels/useReportForm';

export default function ReportScreen() {
  const router = useRouter();
  const vm = useReportForm(() => router.push('/confirmation'));

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={styles.flex} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Report a hazard</Text>

        <Pressable style={styles.photoBox} onPress={() => router.push('/camera')}>
          <Ionicons name="camera-outline" size={32} color={colors.primary} />
          <Text style={styles.photoText}>Add a photo</Text>
        </Pressable>

        <View style={styles.locationCard}>
          <Ionicons name="location-outline" size={22} color={colors.primary} />
          <View style={styles.grow}>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>Current location, tagged automatically</Text>
          </View>
        </View>

        <Text style={styles.label}>Category</Text>
        <View style={styles.chips}>
          {HAZARD_CATEGORIES.map((c) => {
            const active = vm.category === c;
            return (
              <Pressable
                key={c}
                onPress={() => vm.setCategory(c)}
                style={[styles.chip, active && styles.chipActive]}
              >
                <Text style={[styles.chipText, active && styles.chipTextActive]}>{c}</Text>
              </Pressable>
            );
          })}
        </View>

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="What did you see?"
          placeholderTextColor={colors.muted}
          multiline
          value={vm.description}
          onChangeText={vm.setDescription}
        />

        {vm.error && <Text style={styles.error}>{vm.error}</Text>}

        <Pressable style={styles.button} onPress={vm.submit}>
          <Text style={styles.buttonText}>Submit report</Text>
        </Pressable>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  grow: { flex: 1 },
  content: { padding: spacing.md, gap: spacing.md },
  title: { fontSize: font.title, fontWeight: '700', color: colors.text },
  photoBox: { height: 150, borderRadius: radius.md, borderWidth: 1, borderStyle: 'dashed', borderColor: colors.border, backgroundColor: colors.surface, alignItems: 'center', justifyContent: 'center', gap: spacing.sm },
  photoText: { color: colors.primary, fontSize: font.body, fontWeight: '600' },
  locationCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, backgroundColor: colors.surface, borderRadius: radius.md, padding: spacing.md },
  label: { color: colors.muted, fontSize: font.small, fontWeight: '600' },
  value: { color: colors.text, fontSize: font.body, marginTop: 2 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  chip: { minHeight: 44, paddingHorizontal: spacing.md, borderRadius: radius.pill, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, justifyContent: 'center' },
  chipActive: { backgroundColor: colors.primary, borderColor: colors.primary },
  chipText: { color: colors.text, fontSize: font.body },
  chipTextActive: { color: colors.onPrimary, fontWeight: '700' },
  input: { minHeight: 96, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, backgroundColor: colors.surface, color: colors.text, fontSize: font.body, padding: spacing.md, textAlignVertical: 'top' },
  error: { color: colors.danger, fontSize: font.small },
  button: { minHeight: 52, borderRadius: radius.md, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: colors.onPrimary, fontSize: font.body, fontWeight: '700' },
});
