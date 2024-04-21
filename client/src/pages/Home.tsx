import Editorr from "./Editor";
import parse from "html-react-parser";
const Home = () => {
	const content =
		'<p><strong>Fetch data from The file</strong></p><ol style="list-style-type: lower-roman;"><li>one</li><li>two&nbsp;</li><li>threee</li><li>four</li><li>five</li></ol>';
	return (
		<div className="py-2 w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white flex items-center justify-center flex-col gap-4 px-2 md:px-0">
			{parse(content)}
		</div>
	);
};

export { Home };
