import { Link } from 'react-router-dom';
import { Card } from './card';
import { CodeXmlIcon, HomeIcon } from 'lucide-react';

type ResultsProps = {
  correctAnswers: number;
  questionsAmount: number;
};

export function Results({ correctAnswers, questionsAmount }: ResultsProps) {
  const wrongAnswers = questionsAmount - correctAnswers;

  return (
    <div>
      <h2 className='text-center text-2xl md:text-4xl text-gray-100 font-extrabold'>
        🎉 Congrats!
      </h2>

      <section className='flex flex-row flex-wrap justify-center gap-4 px-4 md:gap-16 mt-10'>
        <Card
          description='Total questions'
          icon='⚡'
        >
          {questionsAmount}
        </Card>

        <Card
          description='Correct answers'
          icon='🎯'
          variant='correct'
        >
          {correctAnswers}
        </Card>

        <Card
          description='Wrong answers'
          icon='❌'
          variant='wrong'
        >
          {wrongAnswers}
        </Card>
      </section>

      <div className='mt-16 flex flex-col gap-4 max-w-80 px-5 mx-auto'>
        <a
          href='https://linkedin.com/in/cristian-k-sbardelotto/'
          target='_blank'
          className='py-2 px-5 border-2 bg-transparent border-gray-600 rounded-3xl hover:border-white transition-colors'
        >
          <button className='w-full flex items-center justify-center gap-1.5 md:text-lg text-white'>
            <CodeXmlIcon size={18} /> Meet the developer
          </button>
        </a>

        <Link
          className='py-2 px-5 border-2 bg-transparent border-gray-600 rounded-3xl hover:border-white transition-colors'
          to='/'
        >
          <button className='w-full flex items-center justify-center gap-1.5 md:text-lg text-white'>
            <HomeIcon size={18} /> Go back to home
          </button>
        </Link>
      </div>
    </div>
  );
}
