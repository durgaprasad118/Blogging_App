import { Editor } from "@tinymce/tinymce-react";

export interface EditorI {
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
}

const apiKey = import.meta.env.VITE_KEY;

function Editorr({ content, setContent }: EditorI) {
	const onEditorInputChange = (newValue: string) => {
		setContent(newValue);
	};
	return (
		<div className="py-3">
			<Editor
				apiKey={apiKey}
				init={{
					menubar: false,
					direction: "ltr",
					icons: "jam",
					plugins:
						"anchor autolink charmap codesample emoticons fullscreen link lists media searchreplace table visualblocks wordcount code   code codesample     linkchecker         ",
					toolbar:
						"undo redo | blocks fontfamily  | bold italic underline strikethrough | link   table  | addcomment showcomments codesample code | fullscreen    | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
					codesample_languages: [
						{ text: "HTML/XML", value: "markup" },
						{ text: "JavaScript", value: "javascript" },
						{ text: "CSS", value: "css" },
						{ text: "PHP", value: "php" },
						{ text: "Ruby", value: "ruby" },
						{ text: "Python", value: "python" },
						{ text: "Java", value: "java" },
						{ text: "C", value: "c" },
						{ text: "C#", value: "csharp" },
						{ text: "C++", value: "cpp" },
					],
					tinycomments_mode: "embedded",
					tinycomments_author: "Author name",
					mergetags_list: [
						{ value: "First.Name", title: "First Name" },
						{ value: "Email", title: "Email" },
					],
					ai_request: (respondWith: (value: string) => void) =>
						respondWith("See docs to implement AI Assistant"),
				}}
				onEditorChange={(newValue) => onEditorInputChange(newValue)}
				value={content}
			/>
		</div>
	);
}
export { Editorr };
