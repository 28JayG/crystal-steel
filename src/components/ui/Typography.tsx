import React from 'react';
import { typography, TypographyVariant } from '@/theme/typography';

interface TypographyProps {
  variant?: TypographyVariant;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'body',
  as,
  className = '',
  children,
  id,
}) => {
  // Determine appropriate default HTML element based on variant
  const defaultElements: Record<TypographyVariant, React.ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    body: 'p',
    small: 'span',
    accentLabel: 'span',
  };

  const Component = as || defaultElements[variant];
  const combinedClasses = `${typography[variant]} ${className}`.trim();

  return (
    <Component className={combinedClasses} id={id}>
      {children}
    </Component>
  );
};
