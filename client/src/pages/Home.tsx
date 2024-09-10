import { useNavigate } from 'react-router-dom';
import { Panel } from '../components';
import { data } from '../utils';
const Home = () => {
    const navigate = useNavigate();
    return (
        <div className=" dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] bg-blend-multiply text-gray-800 dark:text-gray-50">
            <section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
                <div
                    data-aos="zoom-in-up"
                    className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative"
                >
                    <a
                        className="inline-flex justify-between items-center py-1 px-1 pe-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800"
                        onClick={() => navigate('/blogs')}
                    >
                        <span className="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 me-3">
                            New{' '}
                        </span>
                        <span className="md:text-sm text-xs  ">
                            Discover more of what matters to you
                        </span>
                        <svg
                            className="w-2.5 h-2.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                    </a>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                        Your stories deserve a stage. It's time to{' '}
                        <span className="text-blue-600">blog </span>
                    </h1>
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">
                        Write freely, publish easily. Your voice, amplified.
                    </p>
                    <div className="w-full max-w-md mx-auto">
                        <label
                            htmlFor="default-email"
                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                        >
                            Email sign-up
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 16"
                                >
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                </svg>
                            </div>
                            <input
                                type="email"
                                id="default-email"
                                className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Enter your email here..."
                                required
                            />
                            <button
                                type="submit"
                                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() => navigate('/signup')}
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
            </section>
            <section className="">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div
                        data-aos="zoom-in-up"
                        className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8"
                    >
                        <a
                            href="#"
                            className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
                        >
                            <svg
                                className="w-2.5 h-2.5 me-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 14"
                            >
                                <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                            </svg>
                            Connect
                        </a>
                        <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                            Explore diverse range of blogs{' '}
                        </h1>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                            Explore a vast library of blogs and connect with
                            passionate creators who share your interests. Find
                            inspiration, spark discussions, and build a
                            supportive community around your writing.
                        </p>
                        <a
                            href="#"
                            className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div
                            data-aos="zoom-in-right"
                            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
                        >
                            <a
                                href="#"
                                className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 mb-2"
                            >
                                <svg
                                    className="w-2.5 h-2.5 me-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 18"
                                >
                                    <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                                </svg>
                                Rich Text Editor
                            </a>
                            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                                Craft beautiful, formatted posts
                            </h2>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                                Craft stunning blogs with our rich text editor.
                                Edit freely, format beautifully, and embed media
                                for an impactful experience with WYSIWYG editor
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                            >
                                Read more
                                <svg
                                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </div>
                        <div
                            data-aos="zoom-in-left"
                            className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12"
                        >
                            <a
                                href="#"
                                className="bg-purple-100 text-purple-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-purple-400 mb-2"
                            >
                                <svg
                                    className="w-2.5 h-2.5 me-1.5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                                    />
                                </svg>
                                Organize
                            </a>
                            <h2 className="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">
                                Keep organized with clear categories{' '}
                            </h2>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                                Add multiple tags for clean organizing of blogs.
                                Create and access with any device
                            </p>
                            <a
                                href="#"
                                className="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                            >
                                Read more
                                <svg
                                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 10"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 ">
                <div className="flex justify-center flex-col items-center gap-y-2">
                    <h1 className="md:text-3xl text-gray-900 dark:text-white font-bold">
                        FAQs
                    </h1>
                    {data.map((x) => {
                        return (
                            <Panel
                                key={x.id}
                                title={x.title}
                                id={x.id}
                                description={x.description}
                                data-aos="fade-right"
                            ></Panel>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export { Home };
