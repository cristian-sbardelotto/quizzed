import { useState } from 'react';

import { RootLayout } from '../layouts/root';
import { Quiz } from '../components/quiz';

import { questions } from '../data/questions';

export function Play() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);

  const currentQuestion = questions[questionIndex];

  function incrementQuestionIndex() {
    if (questions.length > questionIndex + 1) {
      setQuestionIndex(questionIndex + 1);
    }
  }

  return (
    <RootLayout>
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
    </RootLayout>
  );
}
