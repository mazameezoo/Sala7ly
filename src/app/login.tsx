import { View, TextInput, Pressable, ScrollView, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Text from '../components/AppText';
import Wordmark from '../components/Wordmark';
import Logo from '../components/Logo';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { colors, spacing, radius, font } from '../theme';
import { useAuthForm } from '../viewmodels/useAuthForm';

export default function LoginScreen() {
  const router = useRouter();
  const vm = useAuthForm(() => router.replace('/splash'));
  const isRegister = vm.mode === 'register';

  return (
    <KeyboardAvoidingView style={styles.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView style={styles.flex} contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <View style={styles.brand}>
          <Logo size={76} />
          <Wordmark size={44} showArabic />
          <Text style={styles.tagline}>Report road hazards. Keep every driver safe.</Text>
        </View>

        <View style={styles.toggle}>
          <Pressable style={[styles.toggleItem, !isRegister && styles.toggleActive]} onPress={() => vm.switchMode('signin')}>
            <Text style={[styles.toggleText, !isRegister && styles.toggleTextActive]}>Sign in</Text>
          </Pressable>
          <Pressable style={[styles.toggleItem, isRegister && styles.toggleActive]} onPress={() => vm.switchMode('register')}>
            <Text style={[styles.toggleText, isRegister && styles.toggleTextActive]}>Register</Text>
          </Pressable>
        </View>

        {isRegister && (
          <View style={styles.field}>
            <Ionicons name="person-outline" size={20} color={colors.muted} />
            <TextInput
              style={styles.input}
              placeholder="Full name"
              placeholderTextColor={colors.muted}
              value={vm.name}
              onChangeText={vm.setName}
            />
          </View>
        )}

        <View style={styles.field}>
          <Ionicons name="mail-outline" size={20} color={colors.muted} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={colors.muted}
            autoCapitalize="none"
            keyboardType="email-address"
            value={vm.email}
            onChangeText={vm.setEmail}
          />
        </View>

        <View style={styles.field}>
          <Ionicons name="lock-closed-outline" size={20} color={colors.muted} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={colors.muted}
            secureTextEntry={!vm.showPassword}
            autoCapitalize="none"
            value={vm.password}
            onChangeText={vm.setPassword}
          />
          <Pressable onPress={vm.toggleShowPassword} hitSlop={12}>
            <Ionicons name={vm.showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color={colors.muted} />
          </Pressable>
        </View>

        {vm.error && <Text style={styles.error}>{vm.error}</Text>}

        <Pressable style={styles.button} onPress={vm.submit}>
          <Text style={styles.buttonText}>{isRegister ? 'Create account' : 'Sign in'}</Text>
        </Pressable>

        <Text style={styles.footer}>
          {isRegister ? 'Already have an account? ' : 'New to Sala7ly? '}
          <Text style={styles.link} onPress={() => vm.switchMode(isRegister ? 'signin' : 'register')}>
            {isRegister ? 'Sign in' : 'Register'}
          </Text>
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1, backgroundColor: colors.background },
  content: { flexGrow: 1, justifyContent: 'center', padding: spacing.lg, gap: spacing.md },
  brand: { alignItems: 'center', gap: spacing.sm, marginBottom: spacing.md },
  logo: { width: 72, height: 72, borderRadius: radius.lg, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  appName: { color: colors.text, fontSize: font.title + 4, fontWeight: '800' },
  tagline: { color: colors.muted, fontSize: font.body, textAlign: 'center' },
  toggle: { flexDirection: 'row', backgroundColor: colors.surface, borderRadius: radius.pill, padding: 4 },
  toggleItem: { flex: 1, minHeight: 44, borderRadius: radius.pill, alignItems: 'center', justifyContent: 'center' },
  toggleActive: { backgroundColor: colors.surfaceRaised },
  toggleText: { color: colors.muted, fontSize: font.body, fontWeight: '600' },
  toggleTextActive: { color: colors.text },
  field: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, minHeight: 52, backgroundColor: colors.surface, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, paddingHorizontal: spacing.md },
  input: { flex: 1, color: colors.text, fontSize: font.body, paddingVertical: spacing.sm },
  error: { color: colors.danger, fontSize: font.small },
  button: { minHeight: 52, borderRadius: radius.md, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  buttonText: { color: colors.onPrimary, fontSize: font.body, fontWeight: '700' },
  footer: { color: colors.muted, fontSize: font.body, textAlign: 'center' },
  link: { color: colors.primary, fontWeight: '700' },
});
