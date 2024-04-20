import JoditEditor from "jodit-react";
export interface EditorI {
	content: string;
	setContent: React.Dispatch<React.SetStateAction<string>>;
}
const Editor = ({ content, setContent }: EditorI) => {
	return (
		<div>
			<JoditEditor
				value={content}
				config={{
					buttons: [
						"source",
						"|",
						"bold",
						"italic",
						"underline",
						"|",
						"ul",
						"ol",
						"|",
						"font",
						"fontsize",
						"brush",
						"paragraph",
						"|",
						"image",
						"table",
						"link",
						"|",
						"left",
						"center",
						"right",
						"justify",
						"|",
						"undo",
						"redo",
						"|",
						"hr",
						"eraser",
						"fullsize",
					],
					height: "450px",
					width: "100%",
				}}
				onBlur={(newContent) => setContent(newContent)}
				onChange={(newContent) => {}}
			/>
		</div>
	);
};
export { Editor };
