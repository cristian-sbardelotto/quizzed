import { CheckIcon } from 'lucide-react';
import { RootLayout } from '../layouts/root';

export function Play() {
  return (
    <RootLayout>
      <h2 className='mt-4 text-center text-gray-100 text-2xl'>
        3. When was something created?
      </h2>

      <ul className='mt-8 flex flex-col items-center gap-5'>
        <li className='w-full p-2 border-2 border-gray-600 rounded-lg max-w-[500px] shadow-card cursor-pointer hover:translate-x-[-2px] hover:translate-y-[-2px] hover:bg-slate-700/30 transition-all'>
          <button>
            a) <span className='text-gray-100'>1943</span>
          </button>
        </li>

        <li className='w-full p-2 border-2 border-gray-600 rounded-lg max-w-[500px] shadow-card cursor-pointer hover:translate-x-[-2px] hover:translate-y-[-2px] hover:bg-slate-700/30 transition-all'>
          <button>
            b) <span className='text-gray-100'>1498</span>
          </button>
        </li>

        <li className='w-full p-2 border-2 border-gray-600 rounded-lg max-w-[500px] shadow-card cursor-pointer hover:translate-x-[-2px] hover:translate-y-[-2px] hover:bg-slate-700/30 transition-all'>
          <button>
            c) <span className='text-gray-100'>1783</span>
          </button>
        </li>
      </ul>

      <div className='mt-24 flex justify-between items-center max-w-[500px] mx-auto'>
        <p
          className='flex items-center gap-1 text-emerald-500 bg-emerald-500/5 select-none border border-emerald-500 py-1.5 px-4 rounded-2xl'
          title='2 correct answers'
        >
          <CheckIcon size={16} /> 2
        </p>

        <p>
          Question <span className='text-gray-100'>3</span> of{' '}
          <span className='text-gray-100'>10</span>
        </p>
      </div>
    </RootLayout>
  );
}
