import { FC } from "react";

const Header: FC = () => {
    return (
        <div className="bg-gray-50 h-screen flex">
            <div className="m-auto max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <div className="lg:mr-16">
                    <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                        Ready to dive in?
                        <br />
                        <span className="text-indigo-600">Start your project today.</span>
                    </h2>
                    <h3 className="inline-block text-blue-900 font-bold my-2 px-3 py-1 rounded border-solid border-2 border-green-400">
                        With Tailwind CSS v2.0+
                    </h3>
                </div>
                <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href="https://tailwindcss.com/docs"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                        >
                            Get started
                        </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a
                            href="https://tailwindcss.com/"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                        >
                            Tailwind v2.0+
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
