/**
 * Beautiful, predefined themes for FormGuardian React
 * Users can pass a theme or customize colors, spacing, shadows, etc.
 */

export interface FormTheme {
  name: string;
  // Colors
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  background: string;
  inputBg: string;
  inputBorder: string;
  inputBorderHover: string;
  inputBorderFocus: string;
  inputText: string;
  labelText: string;
  errorText: string;
  successText: string;
  // Spacing
  spacingBase: string;
  borderRadius: string;
  // Shadows
  shadowSm: string;
  shadowMd: string;
  shadowLg: string;
  // Typography
  fontSize: string;
  fontWeight: string;
  fontFamily: string;
  // Transitions
  transitionDuration: string;
}

const baseTheme = {
  spacingBase: '1rem',
  borderRadius: '0.5rem',
  fontSize: '1rem',
  fontWeight: '500',
  fontFamily: '"Inter", "Segoe UI", system-ui, sans-serif',
  transitionDuration: '0.2s',
  shadowSm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  shadowMd: '0 4px 12px rgba(0, 0, 0, 0.08)',
  shadowLg: '0 8px 24px rgba(0, 0, 0, 0.12)',
} as const;

/**
 * Modern Blue Theme - Clean, professional, vibrant
 */
export const modernTheme: FormTheme = {
  name: 'modern',
  ...baseTheme,
  primary: '#1e40af', // Deep vibrant blue
  secondary: '#7c3aed', // Purple accent
  success: '#10b981', // Emerald green
  danger: '#f43f5e', // Vibrant red
  warning: '#f59e0b', // Amber
  background: 'linear-gradient(135deg, #dbeafe 0%, #f0fdf4 100%)',
  inputBg: '#ffffff',
  inputBorder: '#60a5fa',
  inputBorderHover: '#3b82f6',
  inputBorderFocus: '#1e40af',
  inputText: '#0f172a',
  labelText: '#1e40af',
  errorText: '#dc2626',
  successText: '#059669',
};

/**
 * Dark Theme - Sleek dark mode with eye-friendly colors
 */
export const darkTheme: FormTheme = {
  name: 'dark',
  ...baseTheme,
  primary: '#f43f5e', // Vibrant pink
  secondary: '#06b6d4', // Cyan
  success: '#34d399', // Emerald
  danger: '#ff6b6b', // Bright red
  warning: '#fbbf24', // Gold
  background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
  inputBg: '#1e293b',
  inputBorder: '#38bdf8',
  inputBorderHover: '#22d3ee',
  inputBorderFocus: '#f43f5e',
  inputText: '#f1f5f9',
  labelText: '#f43f5e',
  errorText: '#ff6b6b',
  successText: '#34d399',
};

/**
 * Minimal Theme - Elegant, minimalist, clean
 */
export const minimalTheme: FormTheme = {
  name: 'minimal',
  ...baseTheme,
  borderRadius: '0.25rem',
  primary: '#d946ef', // Magenta
  secondary: '#ec4899', // Pink
  success: '#22d3ee', // Cyan
  danger: '#ef4444', // Red
  warning: '#fbbf24', // Gold
  background: '#ffffff',
  inputBg: '#f9fafb',
  inputBorder: '#d946ef',
  inputBorderHover: '#ec4899',
  inputBorderFocus: '#d946ef',
  inputText: '#0f172a',
  labelText: '#d946ef',
  errorText: '#ef4444',
  successText: '#22d3ee',
};

/**
 * Gradient Theme - Vibrant, modern with gradient accents
 */
export const gradientTheme: FormTheme = {
  name: 'gradient',
  ...baseTheme,
  borderRadius: '0.75rem',
  primary: '#ec4899', // Hot pink
  secondary: '#06b6d4', // Cyan
  success: '#10b981', // Emerald
  danger: '#ff1744', // Bright red
  warning: '#ffb300', // Amber
  background: 'linear-gradient(135deg, #fce7f3 0%, #e0e7ff 100%)',
  inputBg: '#fef2f9',
  inputBorder: '#f472b6',
  inputBorderHover: '#ec4899',
  inputBorderFocus: '#ec4899',
  inputText: '#831843',
  labelText: '#ec4899',
  errorText: '#ff1744',
  successText: '#10b981',
};

/**
 * Ocean Theme - Cool blues and teals, calm and professional
 */
export const oceanTheme: FormTheme = {
  name: 'ocean',
  ...baseTheme,
  borderRadius: '0.5rem',
  primary: '#0ea5e9', // Sky blue
  secondary: '#06b6d4', // Cyan
  success: '#10b981', // Emerald
  danger: '#f43f5e', // Red
  warning: '#fbbf24', // Gold
  background: 'linear-gradient(135deg, #cffafe 0%, #e0f2fe 100%)',
  inputBg: '#ecf9fd',
  inputBorder: '#38bdf8',
  inputBorderHover: '#0ea5e9',
  inputBorderFocus: '#0284c7',
  inputText: '#065f46',
  labelText: '#0284c7',
  errorText: '#f43f5e',
  successText: '#10b981',
};

/**
 * Sunset Theme - Warm oranges, reds, pinks
 */
export const sunsetTheme: FormTheme = {
  name: 'sunset',
  ...baseTheme,
  borderRadius: '0.625rem',
  primary: '#f97316', // Vibrant orange
  secondary: '#ec4899', // Pink
  success: '#22c55e', // Green
  danger: '#f43f5e', // Red
  warning: '#fbbf24', // Gold
  background: 'linear-gradient(135deg, #fed7aa 0%, #fbcfe8 100%)',
  inputBg: '#fff7ed',
  inputBorder: '#fb923c',
  inputBorderHover: '#f97316',
  inputBorderFocus: '#f97316',
  inputText: '#7c2d12',
  labelText: '#f97316',
  errorText: '#f43f5e',
  successText: '#22c55e',
};

/**
 * Purple Theme - Elegant, creative, modern
 */
export const purpleTheme: FormTheme = {
  name: 'purple',
  ...baseTheme,
  borderRadius: '0.625rem',
  primary: '#a78bfa', // Light purple
  secondary: '#ec4899', // Pink
  success: '#06b6d4', // Cyan
  danger: '#ff4757', // Red
  warning: '#fbbf24', // Gold
  background: 'linear-gradient(135deg, #ede9fe 0%, #f3e8ff 100%)',
  inputBg: '#faf5ff',
  inputBorder: '#c4b5fd',
  inputBorderHover: '#a78bfa',
  inputBorderFocus: '#7c3aed',
  inputText: '#581c87',
  labelText: '#7c3aed',
  errorText: '#ff4757',
  successText: '#06b6d4',
};

/**
 * Forest Theme - Green, earthy, natural
 */
export const forestTheme: FormTheme = {
  name: 'forest',
  ...baseTheme,
  borderRadius: '0.5rem',
  primary: '#059669', // Teal green
  secondary: '#14b8a6', // Turquoise
  success: '#10b981', // Green
  danger: '#f43f5e', // Red
  warning: '#fbbf24', // Gold
  background: 'linear-gradient(135deg, #d1fae5 0%, #e0f2fe 100%)',
  inputBg: '#ecfdf5',
  inputBorder: '#6ee7b7',
  inputBorderHover: '#2dd4bf',
  inputBorderFocus: '#059669',
  inputText: '#065f46',
  labelText: '#059669',
  errorText: '#f43f5e',
  successText: '#10b981',
};

/**
 * All available themes
 */
export const themes = {
  modern: modernTheme,
  dark: darkTheme,
  minimal: minimalTheme,
  gradient: gradientTheme,
  ocean: oceanTheme,
  sunset: sunsetTheme,
  purple: purpleTheme,
  forest: forestTheme,
};

export type ThemeName = keyof typeof themes;

/**
 * Get a theme by name or return custom theme
 */
export function getTheme(themeName: ThemeName | FormTheme): FormTheme {
  if (typeof themeName === 'string') {
    return themes[themeName] || modernTheme;
  }
  return themeName;
}

/**
 * Create CSS custom properties (variables) from a theme
 */
export function generateThemeVariables(theme: FormTheme): Record<string, string> {
  return {
    '--form-primary': theme.primary,
    '--form-secondary': theme.secondary,
    '--form-success': theme.success,
    '--form-danger': theme.danger,
    '--form-warning': theme.warning,
    '--form-background': theme.background,
    '--form-input-bg': theme.inputBg,
    '--form-input-border': theme.inputBorder,
    '--form-input-border-hover': theme.inputBorderHover,
    '--form-input-border-focus': theme.inputBorderFocus,
    '--form-input-text': theme.inputText,
    '--form-label-text': theme.labelText,
    '--form-error-text': theme.errorText,
    '--form-success-text': theme.successText,
    '--form-spacing-base': theme.spacingBase,
    '--form-border-radius': theme.borderRadius,
    '--form-font-size': theme.fontSize,
    '--form-font-weight': theme.fontWeight,
    '--form-font-family': theme.fontFamily,
    '--form-transition-duration': theme.transitionDuration,
    '--form-shadow-sm': theme.shadowSm,
    '--form-shadow-md': theme.shadowMd,
    '--form-shadow-lg': theme.shadowLg,
  };
}
