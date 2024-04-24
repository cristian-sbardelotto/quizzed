import { ReactNode } from 'react';

import { Title } from '../title';

type QuizTitleProps = {
  children: ReactNode;
  currentQuestion: string | number;
};

export function QuizTitle({ children, currentQuestion }: QuizTitleProps) {
  return (
    <Title className='px-4 max-w-[120ch] mt-4 text-center text-2xl md:text-2xl md:px-0'>
      {currentQuestion}. {children}
    </Title>
  );
}
