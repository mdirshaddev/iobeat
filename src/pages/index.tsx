import type { NextPage } from 'next';
import Head from 'next/head';
import { PreviewBox } from 'components/shared/preview';

const Home: NextPage = (): JSX.Element => {
  return (
    <div>
      <Head>
        <title>Iobeat</title>
        <meta name='description' content='Generated by Md Irshad' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='w-screen h-screen bg-gray-50 dark:bg-gray-900'>
        <div className='px-4 lg:px-16'>
          <PreviewBox />
        </div>
      </main>
    </div>
  );
};

export default Home;