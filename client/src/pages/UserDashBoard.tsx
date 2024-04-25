import { useNavigate } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { BlogCard, SearchInput } from "../components";
import { BlogCardSkeleton } from "../components/skeletons";
import { userBlogs } from "../store/atoms";

interface BlogI {
	authorId: string;
	labels: string[];
	createdAt: Date;
	id: string;
	content: string;
	image: string;
	title: string;
	published: boolean;
}
const UserDashBoard = () => {
	const navigate = useNavigate();
	const {
		state,
		contents: { data },
	} = useRecoilValueLoadable(userBlogs);
	const arr = [1, 2, 3, 4, 5, 6];
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
					<h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
						Your {"   "}
						<span className="text-blue-600 dark:text-blue-500">
							Blogs
						</span>{" "}
					</h1>
				</div>
				<div className="flex items-center justify-center text-center">
					{data?.blogs.length === 0 && (
						<p className="my-3 h-[50vh] text-lg text-gray-500 md:text-xl dark:text-gray-400">
							You haven't written any blogs{" "}
							<a
								onClick={() => {
									navigate("/write");
								}}
								className="font-medium text-blue-600 underline dark:text-blue-500 dark:hover:text-blue-600 hover:text-blue-700 hover:no-underline"
							>
								Write here
							</a>
						</p>
					)}
				</div>
				<div className="flex items-center justify-center flex-col">
					{data?.blogs.map((blog: BlogI) => {
						return (
							<BlogCard
								key={blog.id}
								title={blog.title}
								content={blog.content}
								id={blog.id}
								createdAt={blog.createdAt}
								image={blog.image}
								labels={blog.labels}
							/>
						);
					})}
				</div>
			</div>
			<div className="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
		</section>
	);
};

export { UserDashBoard };
