import React from 'react';
import { GitHubRepoButton } from 'components/shared/github-repo-button';

const PreviewBox: React.FC = () => {
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <div className='w-[300px] border-2 border-gray-700 dark:border-gray-50 shadow-lg rounded-md bg-yellow-300'>
        <div className='px-2 py-4 flex flex-col items-center justify-center'>
          <div className='font-bold text-xl text-black'>
            Iobeat <span>🤖</span>
          </div>
          <div className='p-4 text-center text-black'>
            Final Year Project on Heart Attack Prediction with{' '}
            <a
              target='_blank'
              href='https://www.tensorflow.org/js'
              rel='noreferrer'
              className='bg-orange-500 text-white cursor-pointer rounded px-[4px] py-[2px] font-medium'>
              Tensorflow.js
            </a>{' '}
            Deep Learning Model and Powered by{' '}
            <a
              target='_blank'
              href='https://www.vercel.com'
              rel='noreferrer'
              className='bg-black text-white cursor-pointer rounded px-[4px] py-[2px] font-medium'>
              Vercel
            </a>{' '}
          </div>
          <GitHubRepoButton />
        </div>
      </div>
    </div>
  );
};

export { PreviewBox };
