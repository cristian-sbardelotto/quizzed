import { CheckIcon } from 'lucide-react';

type QuizFooterProps = {
  correctAnswers: number | string;
  currentQuestion: number | string;
  questionsAmount: number | string;
};

export function QuizFooter({
  correctAnswers,
  currentQuestion,
  questionsAmount,
}: QuizFooterProps) {
  return (
    <div className='mt-24 px-4 flex flex-col gap-2 items-center max-w-[500px] mx-auto md:justify-between md:px-0 md:flex-row'>
      <p
        className='flex items-center gap-1 text-emerald-500 bg-emerald-500/5 select-none border border-emerald-500 py-1.5 px-4 rounded-2xl'
        title={`${correctAnswers} correct answers`}
      >
        <CheckIcon size={16} /> {correctAnswers}
      </p>

      <p>
        Question <span className='text-gray-100'>{currentQuestion}</span> of{' '}
        <span className='text-gray-100'>{questionsAmount}</span>
      </p>
    </div>
  );
}
