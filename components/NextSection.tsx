import {FC} from 'react';

const NextSection: FC = () => {
  return (
    <section className='bg-grad flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-sky-400 to-purple-400 py-20 shadow'>
      <div className='container m-auto flex flex-col items-center justify-center'>
        <div className='rounded-md shadow'>
          <a
            href='https://tailwindcss.com/docs'
            className='focus:shadow-outline flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-xl font-medium leading-6 text-white transition duration-150 ease-in-out hover:bg-purple-600 focus:outline-none'>
            Get started
          </a>
        </div>
      </div>
    </section>
  );
};

export default NextSection;
