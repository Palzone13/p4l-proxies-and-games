import { BRAND } from './brand.js';

document.title = BRAND.name;

const form = document.getElementById("proxyForm");
const iframeContainer = document.getElementById("iframeContainer");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const url = document.getElementById("urlInput").value;
    if(url) {
        iframeContainer.innerHTML = `<iframe src="/proxy?url=${encodeURIComponent(url)}" width="100%" height="600"></iframe>`;
    }
});
