import Image from 'next/image';
import {FC, useRef, useContext} from 'react';
import {ScrollContext} from 'utils/scroll-observer';

const Header: FC = () => {
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
      className='sticky top-0 -z-10 flex min-h-screen bg-gray-50'
      style={{transform: `translateY(${progress * 50}vh)`}}>
      <div className='flex w-screen flex-col items-center justify-center border-b-[10px] border-sky-400 px-4 py-12 sm:px-6 lg:px-8 lg:py-16'>
        <h2 className='sm:leading-11 text-center text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl'>
          Ready to dive in?
          <span className='mt-1 block text-sky-600'>
            Start your project today
          </span>
        </h2>
        <div className='mt-10 flex items-center'>
          <div className='mr-2 max-w-[180px]'>
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
              src='https://img.shields.io/github/v/release/tailwindlabs/tailwindcss?style=flat&label='
            />
          </div>
        </div>
        <div className='fixed bottom-8 text-xl'>↓</div>
      </div>
    </div>
  );
};

export default Header;
