import { Link } from 'react-router-dom';

import { HomeCard } from './home-card';

import cardImg1 from '/home-card-1.jpeg';
import cardImg2 from '/home-card-2.jpeg';
import { ArrowRight } from 'lucide-react';

export function Start() {
  return (
    <div className='pt-4 flex flex-col items-center gap-3 px-3'>
      <h2 className='text-center text-3xl md:text-4xl text-gray-100 font-extrabold'>
        Hello, quizzer! Are you ready?
      </h2>

      <p className='text-center text-sm md:text-base'>
        Welcome to <span className='text-gray-100'>Quizzed</span>! Test your
        knowledge about <span className='text-gray-300'>something</span> with
        this ten-questions-quiz!
      </p>

      <Link to='/play'>
        <button className='group mt-12 py-1 px-3 flex items-center justify-center gap-1.5 rounded-md text-gray-300 border border-gray-300 bg-transparent transition-colors cursor-pointer'>
          Give a shot
          <ArrowRight
            size={16}
            className='group-hover:translate-x-1 transition-all'
          />
        </button>
      </Link>

      <div className='mt-6 flex gap-10'>
        <HomeCard image={cardImg1}>
          <h4 className='text-gray-100 font-bold md:text-lg'>Fast-paced</h4>

          <p className='pr-8 text-sm md:text-base'>
            Instantly boost knowledge with fast and simple questions.
          </p>

          <Link to='/play'>
            <button className='group flex items-center justify-center gap-1.5 text-gray-300 hover:underline'>
              Play{' '}
              <ArrowRight
                size={16}
                className='group-hover:translate-x-1 transition-all'
              />
            </button>
          </Link>
        </HomeCard>

        <HomeCard image={cardImg2}>
          <h4 className='text-gray-100 font-bold md:text-lg'>Interactive</h4>

          <p className='text-sm md:text-base'>
            Engage and learn effectively through this hands-on and uncomplicated
            tests.
          </p>

          <Link to='/play'>
            <button className='group flex items-center justify-center gap-1.5 text-gray-300 hover:underline'>
              Play{' '}
              <ArrowRight
                size={16}
                className='group-hover:translate-x-1 transition-all'
              />
            </button>
          </Link>
        </HomeCard>
      </div>
    </div>
  );
}
