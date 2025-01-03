import Editor from 'react-simple-wysiwyg';
export interface EditorI {
    content: string;
    setContent: React.Dispatch<React.SetStateAction<string>>;
}

function Editorr({ content, setContent }: EditorI) {
    return (
        <div className="py-3">
            <Editor
                containerProps={{ style: { resize: 'vertical' } }}
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
        </div>
    );
}
export { Editorr };
