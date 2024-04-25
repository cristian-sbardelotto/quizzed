import { v4 as randomUUID } from 'uuid';

import { shuffleList } from '../utils/options';
import { Question } from '../types/quiz';

export const gamesQuestions: Question[] = [
  {
    id: randomUUID(),
    title: 'Which game features a plumber named Mario?',
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'Legend of Zelda',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Super Mario Bros',
        isCorrect: true,
      },
      {
        id: randomUUID(),
        title: 'Metroid',
        isCorrect: false,
      },
    ]),
  },
  {
    id: randomUUID(),
    title:
      'Who is the main antagonist in the game "The Legend of Zelda: Ocarina of Time"?',
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'Ganondorf',
        isCorrect: true,
      },
      {
        id: randomUUID(),
        title: 'Bowser',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Sephiroth',
        isCorrect: false,
      },
    ]),
  },
  {
    id: randomUUID(),
    title: 'Which game is known for its battle royale mode?',
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'Call of Duty',
        isCorrect: true,
      },
      {
        id: randomUUID(),
        title: 'League of Legends',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Minecraft',
        isCorrect: false,
      },
    ]),
  },
  {
    id: randomUUID(),
    title: 'In which game do players build and explore virtual worlds?',
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'Undertale',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Minecraft',
        isCorrect: true,
      },
      {
        id: randomUUID(),
        title: 'Grand Theft Auto IV',
        isCorrect: false,
      },
    ]),
  },
  {
    id: randomUUID(),
    title:
      'What is the name of the fictional city in the Grand Theft Auto series?',
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'Liberty City',
        isCorrect: true,
      },
      {
        id: randomUUID(),
        title: 'Vice City',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Los Santos',
        isCorrect: false,
      },
    ]),
  },
  {
    id: randomUUID(),
    title: 'Which game franchise features a character named Master Chief?',
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'Halo',
        isCorrect: true,
      },
      {
        id: randomUUID(),
        title: 'Gears of War',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Mass Effect',
        isCorrect: false,
      },
    ]),
  },
  {
    id: randomUUID(),
    title:
      'In which game do players control a group of survivors during a zombie apocalypse?',
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'Left 4 Dead',
        isCorrect: true,
      },
      {
        id: randomUUID(),
        title: 'Resident Evil',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Dead Rising',
        isCorrect: false,
      },
    ]),
  },
  {
    id: randomUUID(),
    title:
      'Which game involves players building and managing their own virtual city?',
    options: shuffleList([
      {
        id: randomUUID(),
        title: 'Cities: Skylines',
        isCorrect: true,
      },
      {
        id: randomUUID(),
        title: 'Terraria',
        isCorrect: false,
      },
      {
        id: randomUUID(),
        title: 'Civilization',
        isCorrect: false,
      },
    ]),
  },
];
