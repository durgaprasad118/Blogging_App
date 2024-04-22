import { Editor } from "@tinymce/tinymce-react";

export interface EditorI {
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
}

const apiKey = import.meta.env.VITE_KEY;
function Editorr({ content, setContent }: EditorI) {
	const onEditorInputChange = (newValue) => {
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
						"anchor autolink charmap codesample emoticons  link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter  linkchecker         tableofcontents footnotes mergetags autocorrect typography inlinecss markdown",
					toolbar:
						"undo redo | blocks fontfamily  | bold italic underline strikethrough | link   table  | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
					tinycomments_mode: "embedded",
					tinycomments_author: "Author name",
					mergetags_list: [
						{ value: "First.Name", title: "First Name" },
						{ value: "Email", title: "Email" },
					],
					ai_request: (request, respondWith) =>
						respondWith.string(() =>
							Promise.reject(
								"See docs to implement AI Assistant",
							),
						),
				}}
				onEditorChange={(newValue, editor) =>
					onEditorInputChange(newValue, editor)
				}
				value={content}
			/>
		</div>
	);
}
export { Editorr };
