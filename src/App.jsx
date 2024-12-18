
// import { useState } from 'react';
// import './App.css';

import { useState } from "react";

// function App() {
//   const [message, setMessage] = useState(" ");
//   const [articleText, setArticleText] = useState("");

//   async function generateAudio() {
//     try {
//       // Get the current active tab
//       const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//       // Send a message to the content script to extract text
//       chrome.tabs.sendMessage(tab.id, { type: "EXTRACT_TEXT" }, (response) => {
//         if (chrome.runtime.lastError) {
//           console.error("Error sending message to content script:", chrome.runtime.lastError.message);
//           setMessage("Failed to extract text from the page.");
//         } else {
//           setMessage("Text extracted successfully!");
//           setArticleText(response.text); // Save extracted text
//         }
//       });
//     } catch (error) {
//       console.error("Error fetching tab URL or sending message:", error);
//       setMessage("An error occurred.");
//     }
//   }

//   return (
//     <div>
//       <h3> Do you want to generate a podcast for this article? </h3>
//       <button onClick={generateAudio}>Generate</button>

//       <div>
//         <p>{message}</p>
//         {/* <textarea
//           value={articleText}
//           readOnly
//           rows={10}
//           cols={50}
//           style={{ marginTop: "10px", width: "100%" }}
//         /> */}
//         { articleText }
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useEffect, useRef, useState } from 'react';

// function App() {
//   const [lyrics, setLyrics] = useState([]);
//   const [currentLyric, setCurrentLyric] = useState('');
//   const audioRef = useRef(null);

//   useEffect(() => {
//     // Parse the lyrics on mount
//     const parsedLyrics = parseLrc(lyricsText);
//     setLyrics(parsedLyrics);
//   }, []);

//   useEffect(() => {
//     // Sync lyrics with audio
//     const audio = audioRef.current;

//     const syncLyrics = () => {
//       const currentTime = audio.currentTime;
//       const currentLine = lyrics.find((line, index) => {
//         const nextLine = lyrics[index + 1];
//         return currentTime >= line.time && (!nextLine || currentTime < nextLine.time);
//       });
//       if (currentLine) {
//         setCurrentLyric(currentLine.text);
//       }
//     };

//     audio.addEventListener('timeupdate', syncLyrics);
//     return () => audio.removeEventListener('timeupdate', syncLyrics);
//   }, [lyrics]);

//   return (
//     <div>
//       <h3>Play Song with Synchronized Lyrics</h3>
//       <audio controls ref={audioRef}>
//         <source src="Shape-Of-You.mp3" type="audio/mpeg" />
//         Your browser does not support the audio element.
//       </audio>
//       <div style={{ marginTop: '20px', fontSize: '20px', fontWeight: 'bold' }}>
//         {currentLyric}
//       </div>
//     </div>
//   );
// }

// // Helper function to parse .lrc lyrics
// function parseLrc(lrcText) {
//   const lines = lrcText.split('\n');
//   const lyrics = [];

//   lines.forEach((line) => {
//     const match = line.match(/\[(\d+):(\d+\.\d+)](.*)/);
//     if (match) {
//       const minutes = parseInt(match[1], 10);
//       const seconds = parseFloat(match[2]);
//       const text = match[3].trim();
//       const time = minutes * 60 + seconds; // Convert to seconds
//       lyrics.push({ time, text });
//     }
//   });

//   return lyrics;
// }

// export default App;

function App(){
    const [message, setMessage] = useState(" ");
    const [article,setArticle]= useState('');
    // const [audioUrl, setAudioUrl] = useState(null);

    async function generatePodcast() {
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
                  setArticle(response.text); // Save extracted text
                }
              });

              const response = await fetch('http://localhost:5000/generate-podcast', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ article }),
              });
        
              if (!response.ok) {
                throw new Error('Failed to generate podcast');
              }

            //   const blob = await response.blob();
            //   const url = URL.createObjectURL(blob);
            //   setAudioUrl(url);

            } 
            catch (error) {
              console.error("Error fetching tab URL or sending message:", error);
              setMessage("An error occurred.");
            }
          }

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <button
          onClick={generatePodcast}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Generate Podcast
        </button>
        <div style={{ marginTop: '20px', color: '#555' }}>
          <p>{message}</p>
          <div
            style={{
              whiteSpace: 'pre-wrap',
              backgroundColor: '#f9f9f9',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #eee',
            }}
          >
            {article}
          </div>
        </div>
      </div>
    );
  }
  
  

export default App;