import { Avatar } from "flowbite-react";
import { PencilLine } from "lucide-react";

const BlogPageSkeleton = () => {
	return (
		<div className="py-2 w-full dark:text-gray-50 text-gray-800 bg-white dark:bg-gray-900 flex items-center justify-center flex-col gap-4 px-3 md:px-20 h-screen ">
			<div className="flex mt-8 items-center justify-center md:h-96 h-48  md:w-3/4 px-2 w-[90vw] bg-gray-200 rounded sm:w-96 dark:bg-gray-700">
				<svg
					className="w-10 h-10 text-gray-300 dark:text-gray-600"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 20 18"
				>
					<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
				</svg>
			</div>
			<div className="flex items-center gap-3">
				<Avatar placeholderInitials="" rounded />

				<div className="text-sm w-20 h-4 b text-gray-500 dark:text-gray-400 animate-pulse">
					<PencilLine className="inline pr-2" />
				</div>
				<span className="h-4 w-20 opacity-60 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 animate-pulse"></span>
			</div>
			<div className="flex flex-col animate-pulse">
				<h1 className="text-center mb-4 text-3xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
					<div className="skeleton-line w-40 rounded-lg bg-gray-200 dark:bg-gray-700 h-8 animate-pulse"></div>
				</h1>
			</div>

			<div className="w-3/4">
				<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
				<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
			</div>
			<div className="mb-3 text-gray-500 dark:text-gray-400 md:text-lg md:px-12 flex gap-4 px-8 animate-pulse">
				<div className="skeleton-line bg-gray-200 dark:bg-gray-700 w-20 h-6 mb-2 animate-pulse"></div>
				<div className="skeleton-line  bg-gray-200 dark:bg-gray-700 w-20 h-6 animate-pulse"></div>
			</div>
		</div>
	);
};

export { BlogPageSkeleton };
