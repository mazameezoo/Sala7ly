import { View, Pressable, StyleSheet } from 'react-native';
import Text from '../components/AppText';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, spacing, radius, font } from '../theme';
import { useCameraPreview } from '../viewmodels/useCameraPreview';

export default function CameraScreen() {
  const router = useRouter();
  const vm = useCameraPreview();

  return (
    <View style={styles.screen}>
      <View style={styles.viewfinder}>
        {vm.taken ? (
          <>
            <Ionicons name="image" size={64} color={colors.primary} />
            <Text style={styles.text}>Photo captured</Text>
          </>
        ) : (
          <>
            <Ionicons name="camera-outline" size={64} color={colors.muted} />
            <Text style={styles.muted}>Point the camera at the hazard</Text>
          </>
        )}
      </View>

      {vm.taken ? (
        <View style={styles.row}>
          <Pressable style={[styles.button, styles.secondary]} onPress={vm.retake}>
            <Text style={styles.secondaryText}>Retake</Text>
          </Pressable>
          <Pressable style={styles.button} onPress={() => router.back()}>
            <Text style={styles.buttonText}>Use photo</Text>
          </Pressable>
        </View>
      ) : (
        <Pressable style={styles.shutter} onPress={vm.takePhoto}>
          <View style={styles.shutterInner} />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background, padding: spacing.md, gap: spacing.lg, alignItems: 'center' },
  viewfinder: { flex: 1, alignSelf: 'stretch', borderRadius: radius.lg, backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center', gap: spacing.sm },
  text: { color: colors.text, fontSize: font.heading, fontWeight: '700' },
  muted: { color: colors.muted, fontSize: font.body },
  shutter: { width: 80, height: 80, borderRadius: 40, borderWidth: 4, borderColor: colors.text, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.md },
  shutterInner: { width: 58, height: 58, borderRadius: 29, backgroundColor: colors.primary },
  row: { flexDirection: 'row', gap: spacing.md, alignSelf: 'stretch', marginBottom: spacing.md },
  button: { flex: 1, minHeight: 52, borderRadius: radius.md, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: colors.onPrimary, fontSize: font.body, fontWeight: '700' },
  secondary: { backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border },
  secondaryText: { color: colors.text, fontSize: font.body, fontWeight: '700' },
});
