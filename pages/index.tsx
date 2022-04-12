import Head from 'next/head';
import Header from '../components/Header';
import NextSection from 'components/NextSection';
import {SITE_NAME} from '../utils/constants';

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta
          name='description'
          content='Starter repo for modern web development. Tech stack: React + TypeScript + Tailwind CSS + Next JS'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Header />
      <NextSection />
    </>
  );
};

export default IndexPage;
