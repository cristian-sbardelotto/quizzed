import { GithubIcon } from 'lucide-react';

export function Header() {
  return (
    <header className='py-8 px-4 flex items-center justify-between'>
      <h1 className='text-2xl text-gray-200 font-bold md:text-3xl'>
        ⚡ Quiz<span className='text-gray-500'>zed</span>
      </h1>

      <a
        className='rounded-2xl text-gray-200 p-2 hover:bg-slate-50/10 transition-colors'
        href='https://github.com/cristian-sbardelotto/quizzed'
        target='_blank'
      >
        <GithubIcon />
      </a>
    </header>
  );
}
