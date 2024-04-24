import { Link } from 'react-router-dom';

import { Title } from '../components/title';
import { Button } from '../components/button';
import { RootLayout } from '../layouts/root';

export function NotFound() {
  return (
    <RootLayout>
      <div
        className='flex flex-col gap-2 items-center animate-appear opacity-0 pointer-events-none'
        style={{ animationFillMode: 'forwards', animationDelay: '0.5s' }}
      >
        <Title className='text-lg md:text-lg'>404</Title>

        <p>Page not found.</p>

        <Link
          to='/'
          className='mt-4'
        >
          <Button>Go back to home</Button>
        </Link>
      </div>
    </RootLayout>
  );
}
