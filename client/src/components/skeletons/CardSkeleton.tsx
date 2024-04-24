import { Avatar } from "flowbite-react";
import { PencilLine } from "lucide-react";

const BlogCardSkeleton = () => {
	return (
		<div className="flex  flex-col-reverse justify-between cursor-pointer  md:w-3/4 w-full  bg-gray-50  md:p-2 mb-4 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg items-center md:gap-10  shadow md:flex-row ">
			<div className="flex flex-col items-start p-4  md:p-5 leading-normal">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					<div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
				</h5>
				<p className="mb-3 text-start font-normal text-gray-700 dark:text-gray-400">
					<div className="w-48 h-4 bg-gray-200 rounded animate-pulse"></div>
					<div className="w-40 h-4 bg-gray-200 rounded mt-2 animate-pulse"></div>
					<div className="w-32 h-4 bg-gray-200 rounded mt-2 animate-pulse"></div>
				</p>

				<div className="flex items-center gap-3">
					<Avatar placeholderInitials="" rounded />

					<div className="text-sm w-20 h-4 b text-gray-500 dark:text-gray-400 animate-pulse">
						<PencilLine className="inline pr-2" />
					</div>
					<span className="h-4 w-20 opacity-60 bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300 animate-pulse"></span>
				</div>
			</div>

			<div className="object-cover md:object-fill w-full rounded-t-lg  md:w-80  h-48 md:rounded-lg animate-pulse">
				<div className="w-full flex items-center justify-center h-full dark:bg-gray-700  bg-gray-200 rounded animate-pulse">
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
			</div>
		</div>
	);
};

export { BlogCardSkeleton };
