export const typography = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight',
  h2: 'text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900',
  h3: 'text-lg md:text-xl font-semibold tracking-tight text-slate-900',
  body: 'text-sm md:text-base text-slate-600 leading-relaxed',
  small: 'text-xs md:text-sm text-slate-500',
  accentLabel: 'text-xs md:text-sm font-semibold uppercase tracking-wider text-amber-600',
} as const;

export type TypographyVariant = keyof typeof typography;
