export const colors = {
  // Main backgrounds
  background: {
    dark: '#0B0F19',       // Premium deep dark industrial blue/black
    card: '#121826',       // Lighter dark slate for cards
    cardHover: '#1A2234',  // Card hover state
    accent: '#EAB308',     // Industrial yellow (yellow-500)
    accentHover: '#CA8A04',// Accent hover state (yellow-600)
    input: '#1E293B',      // Form input background
  },
  // Text colors
  text: {
    primary: '#F8FAFC',    // Near white (slate-50)
    secondary: '#94A3B8',  // Light grey/slate (slate-400)
    muted: '#64748B',      // Medium grey/slate (slate-500)
    accent: '#EAB308',     // Industrial yellow for text highlight
  },
  // Border colors
  border: {
    subtle: '#1E293B',     // Dark slate border (slate-800)
    active: '#EAB308',     // Yellow border for active states
  }
} as const;
