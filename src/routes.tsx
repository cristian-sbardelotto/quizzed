import { Home } from './screens/home';
import { Play } from './screens/play';

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
]);
