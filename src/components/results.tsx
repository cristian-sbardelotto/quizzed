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
      <h2 className='text-center text-4xl text-gray-100 font-extrabold'>
        🎉 Congrats!
      </h2>

      <section className='flex justify-center gap-16 mt-10'>
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

      <div className='mt-12 flex flex-col gap-4 max-w-80 mx-auto'>
        <a
          href='https://linkedin.com/in/cristian-k-sbardelotto/'
          target='_blank'
          className='py-2 px-5 border-2 bg-gray-400 border-transparent rounded-3xl  hover:brightness-[.8] transition-all'
        >
          <button className='w-full flex items-center justify-center gap-1.5 text-lg text-background'>
            <CodeXmlIcon size={18} /> Meet the developer
          </button>
        </a>

        <Link
          className='py-2 px-5 border-2 bg-gray-400 border-transparent rounded-3xl  hover:brightness-[.8] transition-all'
          to='/'
        >
          <button className='w-full flex items-center justify-center gap-1.5 text-lg text-background'>
            <HomeIcon size={18} /> Go back to home
          </button>
        </Link>
      </div>
    </div>
  );
}
