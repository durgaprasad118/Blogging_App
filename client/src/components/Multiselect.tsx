import { Badge } from "flowbite-react";
import { CircleX } from "lucide-react";
import { colors, getRandomColorFromSet } from "../utils/formatDate";
interface TagsInputProps {
	tags: string[];
	setTags: React.Dispatch<React.SetStateAction<string[]>>;
}

function TagsInput({ tags, setTags }: TagsInputProps) {
	function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
		if (e.key !== "Enter") return;
		const value = (e.target as HTMLInputElement).value;
		if (!value.trim()) return;
		setTags((prevTags) => [...prevTags, value]);
		(e.target as HTMLInputElement).value = "";
	}

	function removeTag(index: number) {
		setTags((prevTags) => {
			const newTags = [...prevTags];
			newTags.splice(index, 1);
			return newTags;
		});
	}

	return (
		<div className="flex gap-2 py-2 px-3 items-center flex-wrap bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
			{tags.map((tag, index) => (
				<Badge key={index} color={getRandomColorFromSet(colors)}>
					{tag}
					<CircleX
						className="inline pl-2"
						onClick={() => removeTag(index)}
					/>
				</Badge>
			))}
			<input
				onKeyDown={handleKeyDown}
				type="text"
				className=" h-8 md:w-1/12 w- 1/4 py-2 ps-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder=" add tag"
			/>
		</div>
	);
}

export { TagsInput };
