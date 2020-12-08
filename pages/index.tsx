/* eslint-disable react/react-in-jsx-scope */
import Header from "../components/Header/Header";
import Head from "next/head";
import { SITE_NAME } from "../utils/constants";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const IndexPage = () => {
    return (
        <>
            <Head>
                <title>{SITE_NAME}</title>
                <meta
                    name="description"
                    content="Starter repo for modern web development. Tech stack: React + TypeScript + Tailwind CSS + Next JS"
                ></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Header />
        </>
    );
};

export default IndexPage;
