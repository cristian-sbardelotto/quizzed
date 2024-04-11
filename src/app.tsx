import { Header } from './components/header';
import { Start } from './components/start';

export function App() {
  return (
    <main className='app-container'>
      <Header />

      <div className='mt-6'>
        <Start />
      </div>
    </main>
  );
}
