import axios, { AxiosError } from "axios";
import { Button } from "flowbite-react";
import { Image } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil";
import { toast } from "sonner";
import { Editorr, TagsInput } from "../components";
import { useUpload } from "../hooks";
import { allBlogs, tokenAtom } from "../store/atoms";
const BlogWrite = () => {
	const navigate = useNavigate();
	const BASE_URL = import.meta.env.VITE_URL;
	const [content, setContent] = useState("");
	const [published, setPublished] = useState(false);
	const [title, setTitle] = useState("");
	const [imageFile, setImageFile] = useState<File | null>(null);
	const [imageLink, setImageLink] = useState<string | null>("");
	const { loading, uploadImage, url } = useUpload();
	const [loadingBlog, setloadingBlog] = useState(false);
	const fetchBlogs = useRecoilRefresher_UNSTABLE(allBlogs(""));
	const token = useRecoilValue(tokenAtom);
	const [tags, setTags] = useState<string[]>([]);
	const [ailoading, setAiloading] = useState(false);
	async function aiClick(): Promise<void> {
		if (content === "") {
			toast.error("Content is empty!");
			return;
		}
		try {
			const requestOptions: RequestInit = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization:
						"Bearer " + String(import.meta.env.VITE_API_KEY),
				},
				body: JSON.stringify({
					model: "gpt-3.5-turbo",
					messages: [
						{
							role: "user",
							content:
								"Check for the grammatical mistakes if any from the text thats provided and return the data in the similar html format only and you can update the text and modify for better readability of the blog and give only the corrected hting don't provide anyother data only correct the data and return it: " +
								content,
						},
					],
				}),
			};
			setAiloading(true);
			const response = await fetch(
				import.meta.env.VITE_OPENAI,
				requestOptions
			);
			const data = await response.json();
			setContent("");
			setContent(data.choices[0].message.content);
			setAiloading(false);
		} catch (error) {
			if (error instanceof AxiosError) {
				console.log(error);
				toast.error(error.response?.data?.message);
			}
			setAiloading(false);
		}
	}
	useEffect(() => {
		if (!loading) {
			setImageLink(url);
		}
	}, [loading, url]);
	const SubmitHandler = async () => {
		try {
			if (!title || !imageLink || !content) {
				toast.error("all feilds are mandatory");
				return;
			}
			setloadingBlog(true);
			const { data } = await axios.post(
				`${BASE_URL}/blog/create`,
				{
					title: title,
					published: published,
					content: content,
					image: imageLink,
					labels: tags.map((label: string) => {
						return label;
					}),
				},
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);
			setloadingBlog(false);
			navigate("/blogs");
			toast.success(data.message);
			fetchBlogs();
			setTitle("");
			setPublished(false);
			setContent("");
			setImageLink("");
			setImageFile(null);
		} catch (error) {
			setTitle("");
			setPublished(false);
			setContent("");
			setImageLink("");
			setImageFile(null);
			setloadingBlog(false);
			if (error instanceof AxiosError) {
				console.log(error);
				toast.error(error.response?.data?.message);
			}
		}
	};

	return (
		<div className="py-2 w-full bg-white dark:bg-gray-900 flex items-center justify-center flex-col gap-4 px-2 md:px-0">
			<div className="md:mt-10  flex-col items-center justify-center">
				<div className="flex items-center justify-between gap-5 px-1">
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
				<div className="py-2 w-full bg-white dark:bg-gray-900 flex items-baseline justify-center  gap-4 px-2 md:px-0">
					<input
						className="block w-full  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						type="file"
						onChange={(e) => {
							if (e.target.files && e.target.files[0]) {
								setImageFile(e.target.files[0]);
							}
						}}
					/>
					<Button
						onClick={() => {
							if (imageFile) {
								uploadImage(imageFile);
							}
						}}
						color="blue"
						disabled={loading}
						isProcessing={loading}
					>
						<Image className="inline pr-2 h-fit py-auto" />
						Upload
					</Button>
				</div>
				<div className="py-1 w-auto px-1">
					<TagsInput tags={tags} setTags={setTags} />
				</div>
				<Editorr content={content} setContent={setContent} />{" "}
				<div className="flex items-center justify-center">
					<Button
						onClick={aiClick}
						disabled={ailoading}
						isProcessing={ailoading}
						color="purple"
					>
						Modify and update Content using ai
					</Button>
				</div>
				<div className="flex my-2 items-center justify-center">
					<Button
						onClick={SubmitHandler}
						color="blue"
						disabled={loadingBlog}
						isProcessing={loadingBlog}
					>
						Publish Blog
					</Button>
				</div>
			</div>
		</div>
	);
};

export { BlogWrite };
