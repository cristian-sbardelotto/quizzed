import { Link } from 'react-router-dom';

import { ResultBadge } from './result-badge';
import { Title } from './title';
import { Button } from './button';
import { ResultsProps } from '../types/results';
import { calculatePrecision, getPrecisionCategory } from '../utils/results';

import { CodeXmlIcon, HomeIcon } from 'lucide-react';

export function Results({ correctAnswers, questionsAmount }: ResultsProps) {
  const wrongAnswers = questionsAmount - correctAnswers;

  const precisionAverage = calculatePrecision({
    correctAnswers,
    questionsAmount,
  });
  const resultsMessage = getPrecisionCategory(precisionAverage);

  const resultsMessagesDictionary = {
    terrible: (
      <>
        <span className='text-gray-100'>Don't worry</span>, everyone starts
        somewhere. Let's work on it!.
      </>
    ),
    bad: (
      <>
        You did a <span className='text-gray-100'>good job</span>! Time to
        review and strengthen your knowledge!
      </>
    ),
    good: (
      <>
        <span className='text-gray-100'>Keep up</span> the good work and focus
        on areas where you can improve.
      </>
    ),
    great: (
      <>
        You're <span className='text-gray-100'>among the best!</span> You're
        doing exceptionally well!
      </>
    ),
    perfect: (
      <>
        You did it perfectly! You're a{' '}
        <span className='text-gray-100'>quiz wizard</span>!
      </>
    ),
  };

  const resultsTitlesDictionary = {
    terrible: 'What a shame! 😥',
    bad: 'Good job! 👍🏻',
    good: 'Cool! 💪🏻',
    great: 'Fantastic! 🚀',
    perfect: 'Congrats! 🎉',
  };

  return (
    <div
      className='animate-appear opacity-0 pointer-events-none'
      style={{ animationFillMode: 'forwards', animationDelay: '0.5s' }}
    >
      <div className='flex flex-col gap-6 px-5 md:items-center'>
        <Title>{resultsTitlesDictionary[resultsMessage]}</Title>

        <p>{resultsMessagesDictionary[resultsMessage]}</p>
      </div>

      <section className='flex flex-row flex-wrap justify-center gap-4 px-4 md:gap-16 mt-10'>
        <ResultBadge
          description='Total questions'
          icon='⚡'
        >
          {questionsAmount}
        </ResultBadge>

        <ResultBadge
          description='Correct answers'
          icon='🎯'
          variant='correct'
        >
          {correctAnswers}
        </ResultBadge>

        <ResultBadge
          description='Wrong answers'
          icon='❌'
          variant='wrong'
        >
          {wrongAnswers}
        </ResultBadge>
      </section>

      <div className='mt-16 flex flex-col gap-4 max-w-80 px-5 mx-auto'>
        <a
          href='https://linkedin.com/in/cristian-k-sbardelotto/'
          target='_blank'
        >
          <Button
            variant='simple'
            className='py-2 px-5 md:text-lg'
          >
            <CodeXmlIcon size={18} /> Meet the developer
          </Button>
        </a>

        <Link to='/'>
          <Button
            variant='simple'
            className='py-2 px-5 md:text-lg'
          >
            <HomeIcon size={18} /> Go back to home
          </Button>
        </Link>
      </div>
    </div>
  );
}
