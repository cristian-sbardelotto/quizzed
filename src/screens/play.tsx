import { useState } from 'react';

import { RootLayout } from '../layouts/root';
import { Results } from '../components/results';
import { Quiz } from '../components/quiz';

import { questions } from '../data/questions';

export function Play() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);

  const currentQuestion = questions[questionIndex];

  function incrementQuestionIndex() {
    setQuestionIndex(questionIndex + 1);
  }

  const isQuizRunning = questionIndex + 1 <= questions.length;

  return (
    <RootLayout>
      {isQuizRunning ? (
        <div
          className='animate-appear opacity-0'
          style={{ animationFillMode: 'forwards', animationDelay: '0.5s' }}
        >
          <Quiz.Title currentQuestion={questionIndex + 1}>
            {currentQuestion.title}
          </Quiz.Title>

          <Quiz.Options
            handleClick={incrementQuestionIndex}
            options={currentQuestion.options}
            handleCorrectAnswer={() =>
              setTotalCorrectAnswers(totalCorrectAnswers + 1)
            }
          />

          <Quiz.Footer
            correctAnswers={totalCorrectAnswers}
            currentQuestion={questionIndex + 1}
            questionsAmount={questions.length}
          />
        </div>
      ) : (
        <Results
          questionsAmount={questions.length}
          correctAnswers={totalCorrectAnswers}
        />
      )}
    </RootLayout>
  );
}
