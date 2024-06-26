import { ReactNode } from 'react';

import { twMerge } from 'tailwind-merge';

type Variant = 'default' | 'correct' | 'wrong';

type ResultBadgeProps = {
  icon: string;
  children: ReactNode;
  description: string;
  variant?: Variant;
};

export function ResultBadge({
  children,
  description,
  icon,
  variant = 'default',
}: ResultBadgeProps) {
  const variantClassesDictionary: Record<Variant, string> = {
    default: 'border-gray-600 shadow-option',
    correct: 'border-emerald-500 shadow-correct-option bg-emerald-500/5',
    wrong: 'border-red-600 shadow-wrong-option bg-red-600/5',
  };

  return (
    <div
      className={twMerge(
        'flex flex-col items-center py-5 px-6 gap-3 rounded-2xl max-w-52 md:w-fit break-all border-2 text-gray-100',
        variantClassesDictionary[variant]
      )}
    >
      <span className='text-xl md:text-2xl'>{icon}</span>

      <p className='font-bold text-lg md:text-xl'>{children}</p>

      <span className='md:text-lg'>{description}</span>
    </div>
  );
}
