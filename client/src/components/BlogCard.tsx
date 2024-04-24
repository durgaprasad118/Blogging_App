import { Avatar, Badge } from "flowbite-react";
import { PencilLine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { dateFormat } from "../utils";
import {
	colors,
	getRandomColorFromSet,
	readingTime,
} from "../utils/formatDate";
import { color } from "framer-motion";
interface CardI {
	title: string;
	image: string;
	content: string;
	id: string;
	createdAt: Date;
	author: string;
	labels: string[];
}
const BlogCard = ({
	title,
	image = "",
	createdAt,
	content,
	id,
	labels,
	author,
}: CardI) => {
	const names = author.split(" ");
	const Author = names[0].charAt(0) + names[names.length - 1].charAt(0);
	const navigate = useNavigate();
	const readTime = readingTime(content.length);
	const regex = /<[^>]+>([^<]+)<\/[^>]+>/g;
	const matches = content.match(regex);
	let extractedText = "";
	if (matches) {
		matches.forEach((match) => {
			const text = match.replace(/<[^>]+>/g, "");
			extractedText += " " + text;
		});
	}
	const words = extractedText.split(" ").slice(0, 20);
	const ParsedContent = words.join(" ") + (words.length < 10 ? "..." : "");
	const date = dateFormat(createdAt);

	return (
		<div
			onClick={() => {
				navigate("/blog/" + id);
			}}
			data-aos="zoom-in-up"
			className="flex   flex-col-reverse justify-between cursor-pointer  md:w-3/4 w-full  bg-gray-50  md:p-2 mb-4 dark:bg-gray-800 border  border-gray-200 dark:border-gray-700 rounded-lg items-center md:gap-10  shadow hover:shadow-gray-400 dark:hover:shadow-gray-700 md:flex-row  "
		>
			<div className="flex flex-col items-start p-4  md:p-5 leading-normal">
				<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
					{title}
				</h5>
				<p className="mb-3 text-start font-normal text-gray-500 dark:text-gray-400">
					{ParsedContent}
				</p>

				<div className="flex items-center w-1/2 py-2  md:py-3 gap-2">
					{labels.map((x: string) => {
						return (
							<Badge
								key={x}
								color={getRandomColorFromSet(colors)}
							>
								{x}
							</Badge>
						);
					})}
				</div>
				<div className="flex items-center gap-3">
					<Avatar placeholderInitials={Author} rounded />

					<div className="text-sm  text-gray-500 dark:text-gray-400">
						<PencilLine className="inline pr-2" />
						{date}
					</div>
					<span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
						{readTime} minutes read
					</span>
				</div>
			</div>

			<img
				className="object-cover md:object-fill w-full rounded-t-lg  md:w-80  h-48 md:rounded-lg "
				src={image}
			/>
		</div>
	);
};

export { BlogCard };
