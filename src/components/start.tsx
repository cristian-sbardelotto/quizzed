import { ArrowRight } from 'lucide-react';

export function Start() {
  return (
    <div className='pt-4 flex flex-col items-center gap-3'>
      <h2 className='text-4xl text-gray-100 font-extrabold'>
        Hello, quizzer! Are you ready?
      </h2>

      <p className='text-stone-500'>
        Welcome to <span className='text-gray-100'>Quizzed</span>! Test your
        knowledge about <span className='text-gray-300'>something</span> with
        this ten-questions-quiz!
      </p>

      <button className='group mt-12 py-1 px-3 flex items-center justify-center gap-1.5 rounded-md text-gray-300 border border-gray-300 bg-transparent transition-colors cursor-pointer'>
        Give a shot
        <ArrowRight
          size={16}
          className='group-hover:translate-x-1 transition-all'
        />
      </button>
    </div>
  );
}
