
// import { useState } from 'react';
// import './App.css';

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

// const lyricsText = `
// [00:02.28] 
// [00:10.30] The club isn't the best place to find a lover
// [00:13.85] So the bar is where I go (mm-mm)
// [00:15.31] Me and my friends at the table doing shots
// [00:17.89] Drinking fast, and then we talk slow (mm-mm)
// [00:20.27] You come over and start up a conversation with just me
// [00:22.62] And trust me, I'll give it a chance now (mm-mm)
// [00:25.09] Take my hand, stop, put "Van the Man" on the jukebox
// [00:27.64] And then we start to dance
// [00:29.61] And now I'm singing like
// [00:30.92] pre-chorus
// [00:32.62] Girl, you know I want your love
// [00:33.25] Your love was handmade for somebody like me
// [00:34.44] Come on now, follow my lead
// [00:35.89] I may be crazy, don't mind me
// [00:38.66] Say, "Boy, let's not talk too much
// [00:39.55] Grab on my waist and put that body on me"
// [00:45.67] Come on now, follow my lead
// [00:47.63] Come, come on now, follow my lead
// [00:49.56] (Mm-mm)
// [00:52.07] chorus
// [00:52.91] I'm in love with the shape of you
// [00:54.43] We push and pull like a magnet do
// [00:56.25] Although my heart is falling too
// [00:58.86] I'm in love with your body
// [01:01.40] Last night you were in my room
// [01:04.07] And now my bed sheets smell like you
// [01:05.84] Every day discovering something brand new
// [01:08.75] Oh, I'm in love with your body
// [01:10.59] chorus
// [01:11.67] Oh I, oh I, oh I, oh I
// [01:12.61] Oh, I'm in love with your body
// [01:15.55] Oh I, oh I, oh I, oh I
// [01:18.80] Oh, I'm in love with your body
// [01:23.46] Oh I, oh I, oh I, oh I
// [01:24.62] Oh, I'm in love with your body
// [01:25.95] Every day discovering something brand new
// [01:28.83] I'm in love with the shape of you
// [01:30.53] verse
// [01:31.18] One week in we let the story begin
// [01:33.06] We're going out on our first date (mm-mm)
// [01:35.23] But you and me are thrifty, so go all-you-can-eat
// [01:37.94] Fill up your bag, and I fill up a plate (mm-mm)
// [01:39.78] verse
// [01:40.26] We talk for hours and hours about the sweet and the sour
// [01:44.43] And how your family is doing okay (mm-mm)
// [01:45.84] And leave and get in a taxi, then kiss in the back seat
// [01:47.66] Tell the driver make the radio play
// [01:49.44] And I'm singing like
// [01:50.41] pre-chorus
// [01:50.97] Girl, you know I want your love
// [01:53.95] Your love was handmade for somebody like me
// [01:56.13] Come on now, follow my lead
// [01:57.68] I may be crazy, don't mind me
// [02:01.20] Say, "Boy, let's not talk too much
// [02:02.62] Grab on my waist and put that body on me"
// [02:05.97] Come on now, follow my lead
// [02:07.58] Come, come on now, follow my lead
// [02:09.40] (Mm-mm)
// [02:10.23] chorus
// [02:11.49] I'm in love with the shape of you
// [02:14.03] We push and pull like a magnet do
// [02:16.34] Although my heart is falling too
// [02:19.18] I'm in love with your body
// [02:21.70] Last night you were in my room
// [02:23.88] And now my bed sheets smell like you
// [02:25.75] Every day discovering something brand new
// [02:28.76] Oh, I'm in love with your body
// [02:30.44] chorus
// [02:31.05] Oh I, oh I, oh I, oh I
// [02:34.28] Oh, I'm in love with your body
// [02:36.57] Oh I, oh I, oh I, oh I
// [02:37.25] Oh, I'm in love with your body
// [02:41.06] Oh I, oh I, oh I, oh I
// [02:43.91] Oh, I'm in love with your body
// [02:45.84] Every day discovering something brand new
// [02:48.83] I'm in love with the shape of you
// [02:50.81] bridge
// [02:51.42] Come on, be my baby, come on
// [02:53.73] Come on, be my baby, come on
// [02:55.86] Come on, be my baby, come on
// [02:58.18] Come on, be my baby, come on
// [03:00.71] Come on, be my baby, come on
// [03:02.63] Come on, be my baby, come on
// [03:05.26] Come on, be my baby, come on
// [03:08.05] Come on, be my baby, come on
// [03:10.16] chorus
// [03:11.68] I'm in love with the shape of you
// [03:15.10] We push and pull like a magnet do
// [03:17.43] Although my heart is falling too
// [03:20.02] I'm in love with your body
// [03:22.99] Last night you were in my room
// [03:25.24] And now my bed sheets smell like you
// [03:27.60] Every day discovering something brand new
// [03:29.88] Oh, I'm in love with your body
// [03:32.00] outro
// [03:32.95] Come on, be my baby, come on
// [03:35.38] Come on, be my baby, come on (I'm in love with your body)
// [03:36.87] Come on, be my baby, come on
// [03:38.19] Come on, be my baby, come on (oh, I'm in love with your body)
// [03:41.14] Come on, be my baby, come on
// [03:44.21] Come on, be my baby, come on (I'm in love with your body)
// [03:46.93] Every day discovering something brand new
// [03:50.00] I'm in love with the shape of you

// `;

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

    async  function getMusic(){
         const res = await fetch(" ");
    }
    return(
        <div>
 <button onClick={ getpodcast }>generate podcast</button>
        </div>
    )
}

export default App;