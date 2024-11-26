const editors_html_textarea = document.getElementById("editors_html_textarea");
const editors_css_textarea = document.getElementById("editors_css_textarea");
const editors_js_textarea = document.getElementById("editors_js_textarea");
const preview = document.querySelector(".preview");
const style = document.createElement("style");
document.head.appendChild(style);

// if (!preview) {
//     throw "Ligma ballz!";
// }
if (!editors_html_textarea) {
    throw "Ligma ballz!";
}
if (!editors_css_textarea) {
    throw "Ligma ballz!";
}
if (!editors_js_textarea) {
    throw "Ligma ballz!";
}

editors_html_textarea.addEventListener('change', () => {
    preview.innerHTML = editors_html_textarea.value;
});

editors_css_textarea.addEventListener('change', () => {
    style.textContent = editors_css_textarea.value;
});

editors_js_textarea.addEventListener('change', () => {
    const CodeToExecute = new Function(editors_js_textarea.value);
    CodeToExecute();
});