import { MouseEvent, useState } from 'react';

import { twMerge } from 'tailwind-merge';

import { Option } from '../../types/quiz';

type QuizOptionsProps = {
  options: Option[];
  handleClick: () => void;
};

const ONE_SECOND_IN_MILLISECONDS = 1000;

export function QuizOptions({ options, handleClick }: QuizOptionsProps) {
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  function handleOptionClick(
    event: MouseEvent<HTMLButtonElement>,
    isCorrect: boolean
  ) {
    if (!isCorrect) {
      event.currentTarget.classList.add('wrong-option');
    }

    setIsOptionSelected(true);

    setTimeout(() => {
      setIsOptionSelected(false);

      handleClick();
    }, ONE_SECOND_IN_MILLISECONDS);
  }

  const correctOptionsClasses =
    'border-emerald-500 shadow-correct-option bg-emerald-500/5';

  return (
    <ul className='max-w-[500px] md:w-[500px] mx-auto mt-8 flex flex-col items-center gap-5 px-4 md:px-0'>
      {options.map(option => (
        <li
          key={option.title}
          className={twMerge(
            'border-2 border-gray-600 shadow-option w-full rounded-lg cursor-pointer hover:translate-x-[-2px] hover:translate-y-[-2px] hover:bg-slate-700/30 transition-all',
            isOptionSelected && 'pointer-events-none',
            isOptionSelected && option.isCorrect && correctOptionsClasses
          )}
        >
          <button
            className='w-full p-4 text-start text-gray-100 text-lg'
            onClick={event => handleOptionClick(event, option.isCorrect)}
          >
            {option.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
