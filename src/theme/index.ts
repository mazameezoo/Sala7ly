const palette = {
  background: '#0B0D10',
  surface: '#14171C',
  surfaceRaised: '#1E232A',
  border: '#2E343D',
  textPrimary: '#F2F4F7',
  textSecondary: '#C9CFD6',
  textMuted: '#9AA3AE',
  accent: '#FFC21A',
  accentText: '#0B0D10',
  error: '#FF6B6B',
  success: '#3DDC84',
};

export const colors = {
  ...palette,
  text: palette.textPrimary,
  muted: palette.textMuted,
  primary: palette.accent,
  onPrimary: palette.accentText,
  danger: palette.error,
  warning: palette.accent,
};

export const status = {
  submitted: colors.error,
  verified: colors.accent,
  fixed: colors.success,
};

export const fonts = {
  latinMedium: 'SpaceGrotesk_500Medium',
  latinBold: 'SpaceGrotesk_700Bold',
  arabicSemi: 'Cairo_600SemiBold',
  arabicBold: 'Cairo_800ExtraBold',
  arabicBlack: 'Cairo_900Black',
};

export const spacing = { xs: 4, sm: 8, ms: 12, md: 16, lg: 24, xl: 32, xxl: 40 };

export const radius = { sm: 8, md: 16, control: 16, lg: 28, card: 28, pill: 999 };

export const font = {
  regular: fonts.latinMedium,
  semi: fonts.latinBold,
  bold: fonts.latinBold,
  title: 28,
  heading: 20,
  body: 16,
  small: 13,
  big: 48,
};

export const textStyles = {
  display: { fontFamily: fonts.latinBold, fontSize: 40, color: colors.textPrimary },
  title: { fontFamily: fonts.latinBold, fontSize: font.title, color: colors.textPrimary },
  heading: { fontFamily: fonts.latinBold, fontSize: font.heading, color: colors.textPrimary },
  body: { fontFamily: fonts.latinMedium, fontSize: font.body, color: colors.textSecondary },
  muted: { fontFamily: fonts.latinMedium, fontSize: font.small, color: colors.textMuted },
  label: {
    fontFamily: fonts.latinMedium,
    fontSize: 13,
    letterSpacing: 13 * 0.14,
    textTransform: 'uppercase' as const,
    color: colors.textMuted,
  },
  button: { fontFamily: fonts.latinBold, fontSize: font.body, color: colors.accentText },
  number: { fontFamily: fonts.latinBold, fontSize: font.big, color: colors.textPrimary },
  arabicTitle: { fontFamily: fonts.arabicBlack, fontSize: font.title, color: colors.textPrimary },
  arabicBody: { fontFamily: fonts.arabicSemi, fontSize: font.body, color: colors.textSecondary },
};
