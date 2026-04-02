/**
 * Theme Core
 * Base design tokens and theme configuration for the ecommerce ecosystem
 */

export const designTokens = {
  colors: {
    gray: {
      50: "var(--color-gray-50)",
      100: "var(--color-gray-100)",
      200: "var(--color-gray-200)",
      300: "var(--color-gray-300)",
      400: "var(--color-gray-400)",
      500: "var(--color-gray-500)",
      600: "var(--color-gray-600)",
      700: "var(--color-gray-700)",
      800: "var(--color-gray-800)",
      900: "var(--color-gray-900)",
    },
  },
  spacing: {
    xs: "var(--spacing-xs)",
    sm: "var(--spacing-sm)",
    md: "var(--spacing-md)",
    lg: "var(--spacing-lg)",
    xl: "var(--spacing-xl)",
    "2xl": "var(--spacing-2xl)",
  },
  fontSize: {
    xs: "var(--font-size-xs)",
    sm: "var(--font-size-sm)",
    base: "var(--font-size-base)",
    lg: "var(--font-size-lg)",
    xl: "var(--font-size-xl)",
    "2xl": "var(--font-size-2xl)",
  },
  fontFamily: {
    sans: "var(--font-family-sans)",
    mono: "var(--font-family-mono)",
  },
  borderRadius: {
    sm: "var(--border-radius-sm)",
    md: "var(--border-radius-md)",
    lg: "var(--border-radius-lg)",
  },
};

export const semanticTokens = {
  colors: {
    brand: {
      primary: "var(--color-brand-primary)",
      secondary: "var(--color-brand-secondary)",
      accent: "var(--color-brand-accent)",
    },
    surface: {
      primary: "var(--color-surface-primary)",
      secondary: "var(--color-surface-secondary)",
    },
    text: {
      primary: "var(--color-text-primary)",
      secondary: "var(--color-text-secondary)",
      inverse: "var(--color-text-inverse)",
    },
    feedback: {
      success: "var(--color-feedback-success)",
      warning: "var(--color-feedback-warning)",
      error: "var(--color-feedback-error)",
      info: "var(--color-feedback-info)",
    },
  },
};
