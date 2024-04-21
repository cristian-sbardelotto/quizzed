import { GithubIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className='py-8 px-4 flex items-center justify-between animate-appear'>
      <Link to='/'>
        <h1 className='text-2xl text-gray-200 font-bold md:text-3xl hover:brightness-[.8] transition-[filter]'>
          ⚡ Quiz<span className='text-gray-500'>zed</span>!
        </h1>
      </Link>

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
