let editorText = "";

function modifyPreview() {
    let previewElement = document.getElementById("preview");
    previewElement.innerHTML = marked(editorText);
} 

function modifyEditor() {
    editorText = document.getElementById("editor").value;
    modifyPreview();
}

function setDefault() {
    editorText = `\
# This is a h1 element
## this is a h2 element

**Bold text**

[Link](https://www.youtube.com)

here is a inline \`<div></div>\` code

\`\`\`
<textarea>
multiline
code
</textarea>
\`\`\`

> a blockquote

- this
- is
- a
- list

![dog image](https://media.istockphoto.com/photos/cute-sitting-smiling-australian-shepherd-facing-the-camera-with-its-picture-id1251005476)`;
document.getElementById("editor").value = editorText;
modifyPreview();   
}



// Maximize minimize functions
function toggleEditor() { 
    let editorId = document.getElementById("editor-div");
    let previewId = document.getElementById("preview-div");

    editorId.classList.toggle("maximized-container");
    previewId.classList.toggle("nodisplay");
}

function togglePreview() {
    let editorId = document.getElementById("editor-div");
    let previewId = document.getElementById("preview-div");

    previewId.classList.toggle("maximized-container");
    editorId.classList.toggle("nodisplay");
}