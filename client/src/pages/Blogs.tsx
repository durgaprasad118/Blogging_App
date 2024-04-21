import { useRecoilValueLoadable } from "recoil";
import { allBlogs } from "../store/atoms";
import { useState } from "react";
const Blogs = () => {
	const [blogs, setBlogs] = useState([]);
	const {
		state,
		contents: { data },
	} = useRecoilValueLoadable(allBlogs);
	if (state == "hasValue") {
		console.log(data?.blogs);
	}
	return (
		<div className="py-2 w-full bg-white dark:bg-gray-900 flex items-center justify-center flex-col gap-4 px-2 md:px-0"></div>
	);
};

export { Blogs };
