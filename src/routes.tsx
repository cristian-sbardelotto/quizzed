import { Home } from './screens/home';
import { Play } from './screens/play';
import { NotFound } from './screens/not-found';

import { generalQuestions } from './data/general-questions';
import { gamesQuestions } from './data/games-questions';

import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/quiz-general',
    element: <Play questions={generalQuestions} />,
  },
  {
    path: '/quiz-games',
    element: <Play questions={gamesQuestions} />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
