document.getElementById("summarizeBtn").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getContent" }, (content) => {
            chrome.runtime.sendMessage(
                { action: "summaize", content },
                (summary) => {
                    document.getElementById("summary").innerText = summary.result;
                }
            );
        });
    });
});
