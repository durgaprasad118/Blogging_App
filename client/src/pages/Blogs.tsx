import { useRecoilValueLoadable } from "recoil";
import { allBlogs } from "../store/atoms";
import { BlogCard, SearchInput } from "../components";
import { BlogCardSkeleton } from "../components/skeletons";
interface BlogI {
	author: {
		id: string;
		email: string;
		name: string;
		password: string;
	};
	authorId: string;
	labels: string[];
	createdAt: Date;
	id: string;
	content: string;
	image: string;
	title: string;
	published: boolean;
}
const Blogs = () => {
	const arr = [1, 2, 3, 4, 5, 6];
	const {
		state,
		contents: { data },
	} = useRecoilValueLoadable(allBlogs(""));
	if (state == "loading") {
		return (
			<section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
				<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative gap-4 h-full">
					<div className="mb-4">
						<SearchInput />
					</div>

					<div className="flex items-center justify-center flex-col">
						{arr.map((x) => {
							return <BlogCardSkeleton key={x} />;
						})}
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
			<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative  gap-4 h-full">
				<div className="mb-4">
					<SearchInput />
				</div>
				<div className="flex items-center justify-center text-center">
					{data?.blogs.length === 0 && (
						<p className="my-3 h-[50vh] text-lg text-gray-500 md:text-xl dark:text-gray-400">
							No blogs found from the search result
						</p>
					)}
				</div>
				<div className="flex items-center justify-center flex-col">
					{data?.blogs.map((blog: BlogI) => {
						if (blog.published) {
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
						}
					})}
				</div>
			</div>
			<div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
		</section>
	);
};

export { Blogs };
