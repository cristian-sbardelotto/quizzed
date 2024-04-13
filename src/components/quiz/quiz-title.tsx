import { ReactNode } from 'react';

type QuizTitleProps = {
  children: ReactNode;
  currentQuestion: string | number;
};

export function QuizTitle({ children, currentQuestion }: QuizTitleProps) {
  return (
    <h2 className='px-4 max-w-[120ch] mt-4 text-center text-gray-100 text-2xl md:px-0'>
      {currentQuestion}. {children}
    </h2>
  );
}
