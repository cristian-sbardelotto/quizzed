import { v4 as randomUUID } from 'uuid';

import { shuffleList } from '../utils/options';
import { Question } from '../types/quiz';

export const generalQuestions: Question[] = [
  {
    id: randomUUID(),
    title: 'What is the capital of France?',
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'Berlin',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'London',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Paris',
        isCorrect: true,
      },
    ]),
  },
  {
    id: randomUUID(),
    title: 'Who painted the Mona Lisa?',
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'Leonardo da Vinci',
        isCorrect: true,
      },
      {
        id: randomUUID(),
        title: 'Pablo Picasso',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Vincent van Gogh',
        isCorrect: false,
      },
    ]),
  },
  {
    id: randomUUID(),
    title: 'What is the largest planet in the solar system?',
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'Earth',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Jupiter',
        isCorrect: true,
      },
      {
        id: randomUUID(),
        title: 'Saturn',
        isCorrect: false,
      },
    ]),
  },
  {
    id: randomUUID(),
    title: 'What is the longest bone in the human body?',
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'Femur',
        isCorrect: true,
      },
      {
        id: randomUUID(),
        title: 'Tibia',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Humerus',
        isCorrect: false,
      },
    ]),
  },
  {
    id: randomUUID(),
    title: "Who wrote 'Don Quixote'?",
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'Friedrich Nietzsche',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'William Shakespeare',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Miguel de Cervantes',
        isCorrect: true,
      },
    ]),
  },
  {
    id: randomUUID(),
    title: 'What is the chemical symbol for gold?',
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'Ag',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Au',
        isCorrect: true,
      },
      {
        id: randomUUID(),
        title: 'Fe',
        isCorrect: false,
      },
    ]),
  },
  {
    id: randomUUID(),
    title: 'Who was the first president of the United States?',
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'George Washington',
        isCorrect: true,
      },
      {
        id: randomUUID(),
        title: 'Thomas Jefferson',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Abraham Lincoln',
        isCorrect: false,
      },
    ]),
  },
  {
    id: randomUUID(),
    title: 'What is the largest ocean in the world?',
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'Atlantic',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Pacific',
        isCorrect: true,
      },
      {
        id: randomUUID(),
        title: 'Indian',
        isCorrect: false,
      },
    ]),
  },
];
