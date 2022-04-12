import {VFC} from 'react';

const NextSection: VFC = () => {
  return (
    <section className='flex flex-col items-center justify-center bg-grad bg-gradient-to-b from-sky-400 to-purple-400 py-20 min-h-screen shadow'>
      <div className='container m-auto flex flex-col items-center justify-center'>
        <div className='rounded-md shadow'>
          <a
            href='https://tailwindcss.com/docs'
            className='text-xl flex items-center justify-center px-5 py-3 border border-transparent leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-purple-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out'>
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default NextSection;
