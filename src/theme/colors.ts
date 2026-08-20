export const colors = {
  // Main backgrounds
  background: {
    primary: '#FFFFFF',      // Primary White Canvas (65-75%)
    secondary: '#F5F7FA',    // Secondary Light Gray
    softSection: '#EEF2F6',  // Soft Section Background
    navy: '#0B1628',         // Primary Brand Navy (15-25%)
    secondaryNavy: '#162236',// Secondary Dark Navy Surface
    card: '#FFFFFF',         // White Cards
    accent: '#FFA500',       // Primary Orange Accent (5-10%)
    accentHover: '#E69500',  // Orange Hover
  },
  // Text colors
  text: {
    navy: '#0B1628',         // Deep Navy Headings & Titles
    body: '#526176',         // Muted Slate/Gray Body Text
    muted: '#718096',        // Small/Muted Text
    light: '#CBD5E1',        // Light Text for Navy Panels
    white: '#FFFFFF',        // Pure White for Dark Backgrounds
    accent: '#FFA500',       // Orange Highlights & Eyebrows
  },
  // Border colors
  border: {
    subtle: '#DDE3EA',       // Subtle Light Gray Border
    navy: '#1E293B',         // Navy Border
    accent: '#FFA500',       // Orange Border
  }
} as const;
