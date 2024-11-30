alert('content script is loading...');

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "EXTRACT_TEXT") {
      // Example: Extract text from <article> or <p> tags
      const article = document.querySelector("article") || document.body;
      const text = Array.from(article.querySelectorAll("p"))
        .map((p) => p.textContent.trim())
        .join("\n");
      
      sendResponse({ text: text || "No text found on this page." });
    }
  });
  