import Image from 'next/image';
import {VFC, useRef, useContext} from 'react';
import {ScrollContext} from 'utils/scroll-observer';

const Header: VFC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const {scrollY} = useContext(ScrollContext);

  let progress = 0;

  const {current: elContainer} = refContainer;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  return (
    <div
      ref={refContainer}
      className='bg-gray-50 min-h-screen flex sticky top-0 -z-10'
      style={{transform: `translateY(${progress * 50}vh)`}}>
      <div className='w-screen py-12 px-4 sm:px-6 lg:py-16 lg:px-8 flex flex-col items-center justify-center border-b-[10px] border-sky-400'>
        <h2 className='text-center text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-11'>
          Ready to dive in?
          <span className='text-sky-600 block mt-1'>
            Start your project today
          </span>
        </h2>
        <div className='flex items-center mt-10'>
          <div className='max-w-[180px] mr-2'>
            <Image
              src='/tailwindcss-logotype.svg'
              alt='tailwindcss logo'
              width={262}
              height={33}
            />
          </div>
          <div className='flex shrink-0'>
            <Image
              width={53}
              height={20}
              alt='package version'
              src='https://img.shields.io/npm/v/tailwindcss.svg?style=flat&label='
            />
          </div>
        </div>
        <div className='fixed bottom-8 text-xl'>↓</div>
      </div>
    </div>
  );
};

export default Header;
