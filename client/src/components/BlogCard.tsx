import { useNavigate } from "react-router-dom";
import { dateFormat } from "../utils";
import { readingTime } from "../utils/formatDate";
interface CardI {
	title: string;
	image: string;
	content: string;
	id: string;
	createdAt: Date;
	author: string;
}
const BlogCard = ({
	title,
	image = "",
	createdAt,
	content,
	id,
	author,
}: CardI) => {
	// converted name to DP
	const names = author.split(" ");
	const Author = names[0].charAt(0) + names[names.length - 1].charAt(0);
	const navigate = useNavigate();
	// extracitng the tag completely
	const readTime = readingTime(content.length);
	console.log(content.length);
	const regex = /<[^>]+>([^<]+)<\/[^>]+>/g;
	const matches = content.match(regex);
	let extractedText = "";
	if (matches) {
		matches.forEach((match) => {
			const text = match.replace(/<[^>]+>/g, "");
			extractedText += " " + text;
		});
	}
	const words = extractedText.split(" ").slice(0, 10);
	const ParsedContent = words.join(" ") + (words.length < 10 ? "..." : "");
	const date = dateFormat(createdAt);

	return (
		<div
			onClick={() => {
				navigate("/blog/" + id);
			}}
			className="flex flex-col cursor-pointer  md:w-3/4 w-full  bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg items-center md:gap-10  shadow md:flex-row  "
		>
			<img
				className="object-cover md:object-fill w-full rounded-t-lg  md:w-72  h-48 md:rounded-none md:rounded-s-lg"
				src={image}
			/>
			<div className="flex flex-col justify-between p-4 leading-normal">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>

				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
					{ParsedContent}
				</p>
				<div className="flex items-baseline gap-3">
					<div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
						<span className="font-medium text-gray-600 dark:text-gray-300">
							{Author}
						</span>
					</div>
					<h2 className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
						{date}
					</h2>
					<span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
						<svg
							className="w-2.5 h-2.5 me-1.5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 20"
						>
							<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
						</svg>
						{readTime} minutes read
					</span>
				</div>
			</div>
		</div>
	);
};

export { BlogCard };
