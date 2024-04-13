import { useState } from 'react';

import { RootLayout } from '../layouts/root';
import { Quiz } from '../components/quiz';

import { questions } from '../data/questions';

export function Play() {
  const [questionIndex, setQuestionIndex] = useState(0);

  const currentQuestion = questions[questionIndex];

  return (
    <RootLayout>
      <Quiz.Title currentQuestion={questionIndex + 1}>
        {currentQuestion.title}
      </Quiz.Title>

      <Quiz.Options
        handleClick={() => setQuestionIndex(questionIndex + 1)}
        options={currentQuestion.options}
      />

      <Quiz.Footer
        correctAnswers={0}
        currentQuestion={questionIndex + 1}
        questionsAmount={questions.length}
      />
    </RootLayout>
  );
}
