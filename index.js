const navbar_run = document.querySelector(".navbar_run");
const navbar_clear = document.querySelector(".navbar_clear");
const navbar_save = document.querySelector(".navbar_save");
const navbar_load = document.querySelector(".navbar_load");

const editors_html_textarea = document.querySelector("#editors_html_textarea");
const editors_css_textarea = document.querySelector("#editors_css_textarea");
const editors_js_textarea = document.querySelector("#editors_js_textarea");

const editors_html_label_border = document.querySelector(".editors_html_label_border");
const editors_css_label_border = document.querySelector(".editors_css_label_border");
const editors_js_label_border = document.querySelector(".editors_js_label_border");

const navbar_load_input = document.querySelector("#navbar_load_input");
const navbar_save_input = document.querySelector("#navbar_save_input");

const reader = new FileReader();
reader.addEventListener("load", () => {
    editors_css_textarea.value = reader.result;
})

const style = document.createElement("style");
document.head.appendChild(style);

const preview = document.createElement("div");
const close = document.createElement("button");
close.innerHTML = "X";
close.classList.add("close");
preview.classList.add("preview");

const blur_div = document.createElement("div");
blur_div.classList.add("blur");

function run_code() {
    document.body.appendChild(blur_div);
    document.body.appendChild(preview);
    document.body.appendChild(close);
    
    preview.innerHTML = editors_html_textarea.value;
    style.textContent = editors_css_textarea.value;
    const CodeToExecute = new Function(editors_js_textarea.value);
    CodeToExecute();
}

function preview_close() {
    document.body.removeChild(blur_div);
    document.body.removeChild(preview);
    document.body.removeChild(close);

    reset_preview();
}

function clear_code() {
    editors_html_textarea.value = "";
    editors_css_textarea.value = "";
    editors_js_textarea.value = "";
}

editors_html_textarea.addEventListener("focusin", () => {
    editors_html_label_border.classList.add("editors_focused");
    editors_html_label_border.style.border = "1.5px solid transparent";
    editors_html_label_border.style.borderBottom = "none";
});

editors_css_textarea.addEventListener("focusin", () => {
    editors_css_label_border.classList.add("editors_focused");
    editors_css_label_border.style.border = "1.5px solid transparent";
    editors_css_label_border.style.borderBottom = "none";
});

editors_js_textarea.addEventListener("focusin", () => {
    editors_js_label_border.classList.add("editors_focused");
    editors_js_label_border.style.border = "1.5px solid transparent";
    editors_js_label_border.style.borderBottom = "none";
});

editors_html_textarea.addEventListener("focusout", () => {
    editors_html_label_border.classList.remove("editors_focused");
    editors_html_label_border.style.border = "1.5px solid var(--clr-borders)";
    editors_html_label_border.style.borderBottom = "none";
});

editors_css_textarea.addEventListener("focusout", () => {
    editors_css_label_border.classList.remove("editors_focused");
    editors_css_label_border.style.border = "1.5px solid var(--clr-borders)";
    editors_css_label_border.style.borderBottom = "none";
});

editors_js_textarea.addEventListener("focusout", () => {
    editors_js_label_border.classList.remove("editors_focused");
    editors_js_label_border.style.border = "1.5px solid var(--clr-borders)";
    editors_js_label_border.style.borderBottom = "none";
});

navbar_run.addEventListener("click", run_code);
navbar_clear.addEventListener("click", clear_code);
navbar_load.addEventListener("click", () => {
    navbar_load_input.click();
});
navbar_load_input.addEventListener("change", () => {
    reader.readAsText(navbar_load_input.files[0]);
});

close.addEventListener("click", preview_close);