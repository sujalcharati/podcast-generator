
import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState(" ");
  const [articleText, setArticleText] = useState("");

  async function generateAudio() {
    try {
      // Get the current active tab
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

      // Send a message to the content script to extract text
      chrome.tabs.sendMessage(tab.id, { type: "EXTRACT_TEXT" }, (response) => {
        if (chrome.runtime.lastError) {
          console.error("Error sending message to content script:", chrome.runtime.lastError.message);
          setMessage("Failed to extract text from the page.");
        } else {
          setMessage("Text extracted successfully!");
          setArticleText(response.text); // Save extracted text
        }
      });
    } catch (error) {
      console.error("Error fetching tab URL or sending message:", error);
      setMessage("An error occurred.");
    }
  }

  return (
    <div>
      <h3> Do you want to generate a podcast for this article? </h3>
      <button onClick={generateAudio}>Generate</button>

      <div>
        <p>{message}</p>
        {/* <textarea
          value={articleText}
          readOnly
          rows={10}
          cols={50}
          style={{ marginTop: "10px", width: "100%" }}
        /> */}
        { articleText }
      </div>
    </div>
  );
}

export default App;
