/* eslint-disable react/react-in-jsx-scope */
import Header from "../src/components/Header/Header";
import Head from "next/head";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const IndexPage = () => {
    return (
        <>
            <html lang="en">
                <Head>
                    <title>Next-ts-starter</title>
                    <meta
                        name="description"
                        content="Starter repo for modern web development. Tech stack: React + TypeScript + Tailwind CSS + Next JS"
                    ></meta>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                </Head>
                <Header />
            </html>
        </>
    );
};

export default IndexPage;
