import { Editor } from "@tinymce/tinymce-react";

export interface EditorI {
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
}

const apiKey = "mu2fiadzwozcmwmerrtl4ew3rre5qk2kw1mya51xoldre8ju";

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
						"anchor autolink charmap codesample emoticons  link lists media searchreplace table visualblocks wordcount checklist mediaembed code codesample casechange export formatpainter  linkchecker         tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
					toolbar:
						"undo redo | blocks fontfamily  | bold italic underline strikethrough | link   table  | addcomment showcomments codesample    | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
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
