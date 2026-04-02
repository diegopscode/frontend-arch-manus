/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design Tokens - Grayscale
        "gray-50": "var(--color-gray-50)",
        "gray-100": "var(--color-gray-100)",
        "gray-200": "var(--color-gray-200)",
        "gray-300": "var(--color-gray-300)",
        "gray-400": "var(--color-gray-400)",
        "gray-500": "var(--color-gray-500)",
        "gray-600": "var(--color-gray-600)",
        "gray-700": "var(--color-gray-700)",
        "gray-800": "var(--color-gray-800)",
        "gray-900": "var(--color-gray-900)",

        // Semantic Tokens - Brand
        brand: {
          primary: "var(--color-brand-primary)",
          secondary: "var(--color-brand-secondary)",
          accent: "var(--color-brand-accent)",
        },

        // Semantic Tokens - Surface
        surface: {
          primary: "var(--color-surface-primary)",
          secondary: "var(--color-surface-secondary)",
        },

        // Semantic Tokens - Text
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          inverse: "var(--color-text-inverse)",
        },

        // Semantic Tokens - Feedback
        feedback: {
          success: "var(--color-feedback-success)",
          warning: "var(--color-feedback-warning)",
          error: "var(--color-feedback-error)",
          info: "var(--color-feedback-info)",
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
    },
  },
  plugins: [],
};
