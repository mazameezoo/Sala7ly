import { Text as RNText, TextProps, StyleSheet } from 'react-native';
import { font } from '../theme';

export default function AppText({ style, ...props }: TextProps) {
  const weight = StyleSheet.flatten(style)?.fontWeight;
  const family =
    weight === '700' || weight === 'bold' ? font.bold : weight === '600' ? font.semi : font.regular;

  return <RNText {...props} style={[style, { fontFamily: family }]} />;
}
