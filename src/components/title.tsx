import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type TitleProps = ComponentProps<'h2'>;

export function Title({ children, className, ...props }: TitleProps) {
  return (
    <h2
      className={twMerge(
        'text-3xl md:text-4xl text-gray-100 font-extrabold',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}
