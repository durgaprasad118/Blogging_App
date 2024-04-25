import { Avatar, Badge } from "flowbite-react";
import parse from "html-react-parser";
import { PencilLine } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue, useRecoilValueLoadable } from "recoil";
import { DeleteModal } from "../components";
import { BlogPageSkeleton } from "../components/skeletons";
import { particularBlog, userIdAtom } from "../store/atoms";
import { colors, getRandomColorFromSet } from "../utils/formatDate";
const BlogPage = () => {
	const userId = useRecoilValue(userIdAtom);
	const { id } = useParams();
	const navigate = useNavigate();
	const { state, contents } = useRecoilValueLoadable(particularBlog(id!));

	if (state === "loading") {
		return <BlogPageSkeleton />;
	}
	return (
		<div className="py-2 w-full dark:text-gray-50 text-gray-800  bg-white dark:bg-gray-900 flex items-center justify-center flex-col gap-4 px-3 md:px-20">
			<img
				className="object-cover md:object-fill w-auto rounded-lg  md:h-96 mt-4 "
				src={contents?.image}
				loading="lazy"
			/>

			<div className="flex items-center gap-3">
				<Avatar placeholderInitials={"dp"} rounded />

				<div className="text-sm  text-gray-500 dark:text-gray-400">
					<PencilLine className="inline pr-2" />
					{2 - 98 - 32}
				</div>
				<span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
					{7} minutes read
				</span>
			</div>
			<div className="flex items-center w-1/2 justify-center gap-2">
				{contents.labels.map((x: string) => {
					return (
						<Badge key={x} color={getRandomColorFromSet(colors)}>
							{x}
						</Badge>
					);
				})}
			</div>
			<div className="flex flex-col ">
				<h1 className="text-center mb-4 text-3xl  font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
					<span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600">
						{contents.title}
					</span>
				</h1>
				<p className="my-4 text-gray-500 dark:text-gray-400 md:text-lg md:px-12 px-8">
					{parse(contents.content)}
				</p>
			</div>
			{userId == contents.authorId && (
				<div className="flex items-baseline gap-4">
					<button
						onClick={() => {
							navigate("/blog/edit/" + id);
						}}
						type="button"
						className="text-green-700 hover:text-white border
						border-green-700 hover:bg-green-800 focus:ring-4
						focus:outline-none focus:ring-green-300 font-medium
						rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
						dark:border-green-500 dark:text-green-500
						dark:hover:text-white dark:hover:bg-green-600
						dark:focus:ring-green-800"
					>
						Update Blog
					</button>
					<DeleteModal id={id!} />
				</div>
			)}
			<hr className="w-48 h-1 mx-auto my-2 bg-gray-100 border-0 rounded dark:bg-gray-700" />
		</div>
	);
};

export { BlogPage };
