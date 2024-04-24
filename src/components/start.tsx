import { Link } from 'react-router-dom';

import { HomeCard } from './home-card';
import { Title } from './title';

import cardImg1 from '/home-card-1.jpeg';
import cardImg2 from '/home-card-2.jpeg';
import { ArrowRight } from 'lucide-react';

export function Start() {
  return (
    <div
      className='pt-4 flex flex-col items-start sm:items-center gap-3 px-5 sm:px-3 opacity-0 animate-appear pointer-events-none'
      style={{ animationFillMode: 'forwards', animationDelay: '0.5s' }}
    >
      <Title>Hello, quizzer! Are you ready?</Title>

      <p className='text-sm md:text-base'>
        Welcome to <span className='text-gray-100'>Quizzed</span>! Test your
        knowledge and try our quiz to{' '}
        <span className='text-gray-300'>challenge</span> yourself!
      </p>

      <Link to='/quiz-general'>
        <button className='group mt-6 py-1 px-3 flex items-center justify-center gap-1.5 rounded-md text-gray-300 border border-gray-300 bg-transparent hover:bg-gray-300 hover:text-background transition-all cursor-pointer'>
          Give a shot
          <ArrowRight
            size={16}
            className='group-hover:translate-x-1 transition-all'
          />
        </button>
      </Link>

      <div className='mt-8 flex flex-wrap gap-10 justify-center'>
        <HomeCard image={cardImg1}>
          <h4 className='text-gray-100 font-bold md:text-lg'>General</h4>

          <p className='pr-8 text-sm md:text-base'>
            Instantly boost knowledge with fast and simple questions.
          </p>

          <Link to='/quiz-general'>
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
          <h4 className='text-gray-100 font-bold md:text-lg'>Games</h4>

          <p className='text-sm md:text-base'>
            Engage effectively through the virtual gamer world.
          </p>

          <Link to='/quiz-games'>
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
