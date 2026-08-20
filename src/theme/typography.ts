export const typography = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1628] leading-tight',
  h2: 'text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#0B1628]',
  h3: 'text-lg md:text-xl font-bold tracking-tight text-[#0B1628]',
  body: 'text-sm md:text-base text-[#526176] leading-relaxed',
  small: 'text-xs md:text-sm text-[#718096]',
  accentLabel: 'text-xs md:text-sm font-bold uppercase tracking-wider text-[#FFA500]',
} as const;

export type TypographyVariant = keyof typeof typography;
