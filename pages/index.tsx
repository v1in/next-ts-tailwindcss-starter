/* eslint-disable react/react-in-jsx-scope */
import Header from 'components/Header/Header';
import Head from 'next/head';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const IndexPage = () => {
    return (
        <>
            <Head>
                <title>Next-ts-starter</title>
            </Head>
            <Header />
        </>
    );
};

export default IndexPage;
