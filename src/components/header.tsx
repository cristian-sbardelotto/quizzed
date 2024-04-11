import { GithubIcon } from 'lucide-react';

export function Header() {
  return (
    <header className='app-container py-8 px-4 flex items-center justify-between'>
      <h1 className='text-2xl md:text-3xl font-bold'>
        ⚡ Quiz<span className='text-stone-500'>zed</span>
      </h1>

      <a
        className='rounded-2xl p-2 hover:bg-slate-50/10 transition-colors'
        href='https://github.com/cristian-sbardelotto/quizzed'
        target='_blank'
      >
        <GithubIcon />
      </a>
    </header>
  );
}
