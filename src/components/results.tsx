import { Card } from './card';

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
    </div>
  );
}
