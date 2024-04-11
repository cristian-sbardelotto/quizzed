import { Header } from './components/header';
import { Start } from './components/start';
import { Footer } from './components/footer';

export function App() {
  return (
    <main className='h-full app-container flex flex-col'>
      <Header />

      <div className='flex-1 mt-6'>
        <Start />
      </div>

      <div className=''>
        <Footer />
      </div>
    </main>
  );
}
