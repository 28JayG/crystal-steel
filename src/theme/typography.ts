export const typography = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none',
  h2: 'text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white',
  h3: 'text-lg md:text-xl font-semibold tracking-tight text-white',
  body: 'text-sm md:text-base text-slate-400 leading-relaxed',
  small: 'text-xs md:text-sm text-slate-500',
  accentLabel: 'text-xs md:text-sm font-semibold uppercase tracking-wider text-amber-500',
} as const;

export type TypographyVariant = keyof typeof typography;
