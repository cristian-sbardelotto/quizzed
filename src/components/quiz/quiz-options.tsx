import { Option } from '../../types/quiz';

type QuizOptionsProps = {
  options: Option[];
};

export function QuizOptions({ options }: QuizOptionsProps) {
  return (
    <ul className='max-w-[500px] md:w-[500px] mx-auto mt-8 flex flex-col items-center gap-5 px-4 md:px-0'>
      {options.map(option => (
        <li
          key={option.title}
          className='w-full p-2 border-2 border-gray-600 rounded-lg shadow-card cursor-pointer hover:translate-x-[-2px] hover:translate-y-[-2px] hover:bg-slate-700/30 transition-all'
        >
          <button>
            <span className='text-gray-100'>{option.title}</span>
          </button>
        </li>
      ))}

      {/* <li className='w-full p-2 border-2 border-gray-600 rounded-lg shadow-card cursor-pointer hover:translate-x-[-2px] hover:translate-y-[-2px] hover:bg-slate-700/30 transition-all'>
        <button>
          a) <span className='text-gray-100'>1943</span>
        </button>
      </li> */}
    </ul>
  );
}
