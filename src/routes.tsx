import { Home } from './screens/home';
import { Play } from './screens/play';
import { NotFound } from './screens/not-found';

import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/play',
    element: <Play />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
