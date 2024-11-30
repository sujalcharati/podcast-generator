
import { useState } from 'react'
import './App.css'

function App() {
  const[message,setMessage]= useState(" ");

  async function generateAudio() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
      setMessage(`Current tab URL is: ${tab.url}`);
    } catch (error) {
      console.error('Error fetching tab URL:', error);
      setMessage('Failed to get the current tab URL.');
    }
  }

  return (
    <div>

      <h3> Do you want to generate a podcast for this article ? </h3>
      <button onClick={generateAudio}>Generate</button>

    <div>

      {message}
    </div>
    </div>
         
  )
}

export default App
