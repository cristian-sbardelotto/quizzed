import { ComponentProps } from 'react';

import { twMerge } from 'tailwind-merge';

type Variant = 'default' | 'simple';

type ButtonProps = ComponentProps<'button'> & {
  variant?: Variant;
};

export function Button({
  variant = 'default',
  className,
  children,
  ...props
}: ButtonProps) {
  const variantClassesDictionary: Record<Variant, string> = {
    default: 'rounded-md text-gray-300 hover:bg-gray-300 hover:text-background',
    simple:
      'text-white border-2 border-gray-600 rounded-3xl hover:border-white',
  };

  return (
    <button
      className={twMerge(
        'w-full py-1 px-3 flex items-center justify-center gap-1.5 border border-gray-300 transition-all',
        variantClassesDictionary[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
