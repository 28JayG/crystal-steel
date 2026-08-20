export const colors = {
  // Main backgrounds
  background: {
    main: '#F8FAFC',        // Slate 50 clean light background
    card: '#FFFFFF',        // Pure white card background
    cardHover: '#F1F5F9',   // Slate 100 on hover
    accent: '#F59E0B',      // Industrial amber/yellow
    accentHover: '#D97706', // Accent hover state
    input: '#FFFFFF',       // Form input background
  },
  // Text colors
  text: {
    primary: '#0F172A',     // Slate 900 for high contrast headers & text
    secondary: '#475569',   // Slate 600 for body descriptions
    muted: '#94A3B8',       // Slate 400 for subtle hints
    accent: '#D97706',      // Amber 600 for highlighted text on light backgrounds
  },
  // Border colors
  border: {
    subtle: '#E2E8F0',      // Slate 200 light border
    active: '#F59E0B',      // Amber border for active states
  }
} as const;
