import { useRecoilValueLoadable } from "recoil";
import { allBlogs } from "../store/atoms";
import { BlogCard } from "../components";
import { BlogCardSkeleton } from "../components/skeletons";
const Blogs = () => {
	const arr = [1, 2, 3, 4, 5, 6];
	const {
		state,
		contents: { data },
	} = useRecoilValueLoadable(allBlogs);
	if (state == "loading") {
		return (
			<section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
				<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative flex items-center justify-center flex-col gap-4 h-full">
					{arr.map((x) => {
						return <BlogCardSkeleton key={x} />;
					})}
				</div>
			</section>
		);
	}
	return (
		<section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
			<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative flex items-center justify-center flex-col gap-4 h-full">
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
							labels={blog.labels}
						/>
					);
				})}
			</div>
			<div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
		</section>
	);
};

export { Blogs };
