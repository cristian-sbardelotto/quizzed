import { ReactNode } from 'react';

type HomeCardProps = {
  image: string;
  children: ReactNode;
};

export function HomeCard({ children, image }: HomeCardProps) {
  return (
    <div className='min-h-[350px] max-h-80 max-w-60 grid grid-rows-2 rounded-sm border-2 border-gray-600 break-words'>
      <div className='h-full w-full overflow-hidden'>
        <img
          src={image}
          alt='Card Image'
          className='h-full w-full object-cover hover:scale-105 transition-transform duration-300'
        />
      </div>

      <div className='flex flex-col gap-3 py-2 px-3 overflow-y-auto'>
        {children}
      </div>
    </div>
  );
}
