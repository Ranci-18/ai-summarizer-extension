// script to grab main text from the page

function getPageContent() {
    return document.body.innerText;
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === "getContent") {
        sendResponse(getPageContent());
    }
});
