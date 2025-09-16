import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyAz8o4tAgWxpJHLGkswYYqpz7MOnKCjoWk");

chrome.runtime.onMessage.addListener(async (msg, sender, sendResponse) => {
    if (msg.action === "summaize") {
        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
            
            const result = await model.generateContent(`Summarize this: ${msg.content}`);
            const text = result.response.text();
            
            sendResponse({ result: text });
        } catch (err) {
            sendResponse({ result: "Error generating summary." });
        }
    }
    return true; // keeps response channel open for async
})
