import axios from "axios";
import { Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
	useRecoilRefresher_UNSTABLE,
	useRecoilValue,
	useRecoilValueLoadable,
} from "recoil";
import { toast } from "sonner";
import { Editorr, TagsInput } from "../components";
import { allBlogs, particularBlog, tokenAtom } from "../store/atoms";
const BlogEdit = () => {
	const BASE_URL = import.meta.env.VITE_URL;
	const { id } = useParams();
	const navigate = useNavigate();
	const { state, contents } = useRecoilValueLoadable(particularBlog(id));
	const [content, setContent] = useState("");
	const [published, setPublished] = useState(false);
	const [title, setTitle] = useState("");
	const [loadingBlog, setloadingBlog] = useState(false);
	const token = useRecoilValue(tokenAtom);
	const refresh = useRecoilRefresher_UNSTABLE(particularBlog(id));
	const fetchBlogs = useRecoilRefresher_UNSTABLE(allBlogs);
	const [tags, setTags] = useState<string[]>([]);
	useEffect(() => {
		if (state == "hasValue") {
			setTitle(contents.title);
			setContent(contents.content);
			setPublished(contents.published);
			setTags([...contents.labels]);
		}
	}, [state, setPublished, setContent, setTitle, contents]);
	const SubmitHandler = async () => {
		try {
			setloadingBlog(true);
			if (!title || !content) {
				toast.error("all feilds are mandatory");
				return;
			}
			const { data } = await axios.put(
				`${BASE_URL}/blog/update/${id}`,
				{
					title: title,
					published: published,
					content: content,
					labels: tags.map((x: string) => {
						return x;
					}),
				},
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				},
			);
			toast.success(data.message);
			navigate("/blog/" + id);
			setTitle("");
			refresh();
			fetchBlogs();
			setPublished(false);
			setContent("");
			setloadingBlog(false);
		} catch (error) {
			console.log(error);
			toast.error(error.response.data.message);
			setTitle("");
			setPublished(false);
			setContent("");
			setloadingBlog(false);
		}
	};

	return (
		<div className="py-2 w-full bg-white dark:bg-gray-900 flex items-center justify-center flex-col gap-4 px-2 md:px-0">
			<div className="md:mt-10  flex-col items-center justify-center">
				<div className="flex items-center gap-5 ">
					<input
						type="text"
						className=" p-2.5 w-3/4 z-20 text-sm text-gray-900 bg-gray-50 rounded-lg  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 px-2"
						placeholder="Enter the Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>

					<div className="flex items-center">
						<input
							id="checked-checkbox"
							type="checkbox"
							checked={published}
							onChange={() => setPublished(!published)}
							className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
							Publish
						</label>
					</div>
				</div>
				{/* <div className="py-2 w-full bg-white dark:bg-gray-900 flex items-baseline justify-center  gap-4 px-2 md:px-0"> */}
				{/* 	<input */}
				{/* 		className="block w-full  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" */}
				{/* 		type="file" */}
				{/* 		onChange={(e) => { */}
				{/* 			if (e.target.files && e.target.files[0]) { */}
				{/* 				setImageFile(e.target.files[0]); */}
				{/* 			} */}
				{/* 		}} */}
				{/* 	/> */}
				{/* 	<Button */}
				{/* 		onClick={() => { */}
				{/* 			if (imageFile) { */}
				{/* 				uploadImage(imageFile); */}
				{/* 			} */}
				{/* 		}} */}
				{/* 		color="blue" */}
				{/* 		disabled={loading} */}
				{/* 		isProcessing={loading} */}
				{/* 	> */}
				{/* 		Upload */}
				{/* 	</Button> */}
				{/* </div> */}
				<div className="py-3 w-auto px-1">
					<TagsInput tags={tags} setTags={setTags} />
				</div>
				<Editorr content={content} setContent={setContent} />{" "}
				<div className="flex my-2 items-center justify-center">
					<Button
						onClick={SubmitHandler}
						color="blue"
						disabled={loadingBlog}
						isProcessing={loadingBlog}
					>
						Update Blog
					</Button>
				</div>
			</div>
		</div>
	);
};

export { BlogEdit };
