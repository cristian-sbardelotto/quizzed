import { Link } from 'react-router-dom';

import { Title } from '../components/title';
import { RootLayout } from '../layouts/root';

export function NotFound() {
  return (
    <RootLayout>
      <div
        className='flex flex-col gap-2 items-center animate-appear opacity-0 pointer-events-none'
        style={{ animationFillMode: 'forwards', animationDelay: '0.5s' }}
      >
        <Title className='text-center text-lg md:text-lg'>404</Title>

        <p className='text-center'>Page not found.</p>

        <Link
          to='/'
          className='mt-4'
        >
          <button className='py-1 px-3 rounded-md text-gray-300 border border-gray-300 hover:bg-gray-300 hover:text-background transition-all'>
            Go back to home
          </button>
        </Link>
      </div>
    </RootLayout>
  );
}
