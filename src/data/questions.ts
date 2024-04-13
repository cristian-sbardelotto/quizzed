import { v4 as randomUUID } from 'uuid';

import { Option } from '../types/quiz';

type Question = {
  id: string;
  title: string;
  options: Option[];
};

export const questions: Question[] = [
  {
    id: randomUUID(),
    title: 'What is the capital of France?',
    options: [
      {
        title: 'Berlin',
        isCorrect: false,
      },
      {
        title: 'London',
        isCorrect: false,
      },
      {
        title: 'Paris',
        isCorrect: true,
      },
    ],
  },
  {
    id: randomUUID(),
    title: 'Who painted the Mona Lisa?',
    options: [
      {
        title: 'Leonardo da Vinci',
        isCorrect: true,
      },
      {
        title: 'Pablo Picasso',
        isCorrect: false,
      },
      {
        title: 'Vincent van Gogh',
        isCorrect: false,
      },
    ],
  },
  {
    id: randomUUID(),
    title: 'What is the largest planet in the solar system?',
    options: [
      {
        title: 'Earth',
        isCorrect: false,
      },
      {
        title: 'Jupiter',
        isCorrect: true,
      },
      {
        title: 'Saturn',
        isCorrect: false,
      },
    ],
  },
  {
    id: randomUUID(),
    title: 'What is the longest bone in the human body?',
    options: [
      {
        title: 'Femur',
        isCorrect: true,
      },
      {
        title: 'Tibia',
        isCorrect: false,
      },
      {
        title: 'Humerus',
        isCorrect: false,
      },
    ],
  },
  {
    id: randomUUID(),
    title: "Who wrote 'Don Quixote'?",
    options: [
      {
        title: 'Friedrich Nietzsche',
        isCorrect: false,
      },
      {
        title: 'William Shakespeare',
        isCorrect: false,
      },
      {
        title: 'Miguel de Cervantes',
        isCorrect: true,
      },
    ],
  },
  {
    id: randomUUID(),
    title: 'What is the chemical symbol for gold?',
    options: [
      {
        title: 'Ag',
        isCorrect: false,
      },
      {
        title: 'Au',
        isCorrect: true,
      },
      {
        title: 'Fe',
        isCorrect: false,
      },
    ],
  },
  {
    id: randomUUID(),
    title: 'Who was the first president of the United States?',
    options: [
      {
        title: 'George Washington',
        isCorrect: true,
      },
      {
        title: 'Thomas Jefferson',
        isCorrect: false,
      },
      {
        title: 'Abraham Lincoln',
        isCorrect: false,
      },
    ],
  },
  {
    id: randomUUID(),
    title: 'What is the largest ocean in the world?',
    options: [
      {
        title: 'Atlantic',
        isCorrect: false,
      },
      {
        title: 'Pacific',
        isCorrect: true,
      },
      {
        title: 'Indian',
        isCorrect: false,
      },
    ],
  },
];
