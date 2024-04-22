import { useNavigate, useParams } from "react-router-dom";
import { particularBlog } from "../store/atoms";
import { useRecoilValueLoadable } from "recoil";
import parse from "html-react-parser";
import { Button } from "flowbite-react";
const BlogPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { state, contents } = useRecoilValueLoadable(particularBlog(id));
	if (state === "loading") {
		return <h1> Loading....</h1>;
	}
	return (
		<div className="py-2 w-full dark:text-gray-50 text-gray-800  bg-white dark:bg-gray-900 flex items-center justify-center flex-col gap-4 px-3 md:px-20">
			<img
				className="object-cover md:object-fill w-auto rounded-t-lg   h-48 md:rounded-none md:rounded-s-lg"
				src={contents.image}
			/>
			<h1>{contents.title}</h1>
			<p>{parse(contents.content)}</p>
			<Button
				color="green"
				onClick={() => {
					navigate("/blog/edit/" + id);
				}}
			>
				Edit Blog
			</Button>
		</div>
	);
};

export { BlogPage };
