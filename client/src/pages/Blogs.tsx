import { useRecoilValueLoadable } from "recoil";
import { allBlogs } from "../store/atoms";
import { useState } from "react";
import { BlogCard } from "../components";
const Blogs = () => {
	const {
		state,
		contents: { data },
	} = useRecoilValueLoadable(allBlogs);
	if (state == "loading") {
		return <div>Loading..</div>;
	}
	return (
		<div className="py-2 w-full bg-white dark:bg-gray-900 flex items-center justify-center flex-col gap-4 px-2 md:px-0">
			{data?.blogs.map((blog) => {
				return (
					<BlogCard
						key={blog.id}
						title={blog.title}
						content={blog.content}
						id={blog.id}
						createdAt={blog.createdAt}
						image={blog.image}
						author={blog.author.name}
					/>
				);
			})}
		</div>
	);
};

export { Blogs };
