import React from 'react';
import { FiGithub } from 'react-icons/fi';

const GitHubRepoButton: React.FC = (): JSX.Element => {
  return (
    <a
      href='https://github.com/mdirshaddev/iobeat'
      target='_blank'
      className='transition-all px-4 py-2 active:scale-95 text-white dark:text-black cursor-pointer flex items-center font-bold rounded-md shadow-lg border-2 border-gray-700 dark:border-gray-50 bg-gray-800 dark:bg-gray-200'
      rel='noreferrer'>
      <FiGithub className='mr-2 text-white dark:text-black' />
      GitHub Link
    </a>
  );
};

export { GitHubRepoButton };
