import { View, Text, StyleSheet } from 'react-native';
import { colors, fonts } from '../theme';

type Props = { size?: number; showArabic?: boolean };

export default function Wordmark({ size = 44, showArabic = false }: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={[styles.latin, { fontSize: size, lineHeight: size * 1.15 }]}>
        Sala<Text style={styles.accent}>7</Text>ly
      </Text>
      {showArabic && <Text style={[styles.arabic, { fontSize: size * 0.5 }]}>صلّحلي</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: 'center' },
  latin: { fontFamily: fonts.latinBold, color: colors.textPrimary, letterSpacing: -1 },
  accent: { color: colors.accent },
  arabic: { fontFamily: fonts.arabicBold, color: colors.textSecondary },
});
