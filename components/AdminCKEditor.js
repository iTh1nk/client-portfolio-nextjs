import React, { useState, useEffect, useRef } from "react";

export default function MyEditor(props) {
  const editorRef = useRef();
  const [editorLoaded, setEditorLoaded] = useState(false);
  const { CKEditor, CustomBuildEditor } = editorRef.current || {};

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react"),
      CustomBuildEditor: require("@we0mmm/ckeditor-custom"),
    };
    setEditorLoaded(true);
  }, []);

  return editorLoaded ? (
    <CKEditor
      editor={CustomBuildEditor}
      data={props.data}
      onInit={(editor) => {
        // You can store the "editor" and use when it is needed.
        // console.log("Editor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        props.cb(data);
        // console.log(editor.ui.componentFactory.names());
      }}
      onBlur={(event, editor) => {
        // console.log("Blur.", editor);
      }}
      onFocus={(event, editor) => {
        // console.log("Focus.", editor);
      }}
      // config={editorConfiguration}
    />
  ) : (
    <div>Editor loading</div>
  );
}
