import { ReactNode } from 'react';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

type RootLayoutProps = {
  children: ReactNode;
};

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className='h-full app-container flex flex-col'>
      <Header />

      <main className='flex-1 mt-6'>{children}</main>

      <Footer />
    </div>
  );
}
