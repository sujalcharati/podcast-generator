
//  chrome.tabs.query({ active: true, lastFocusedWindow: true }, ([tab]) => {
//     console.log('Current URL:', tab.url);
//   });

  
  async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    
    let [tab] = await chrome.tabs.query(queryOptions);
    console.log(tab.url);
    return tab;
  }

  async function sendMessageToActiveTab(message) {
    const [tab] = await chrome.tabs.query({ active: true, lastFocusedWindow: true });
    const response = await chrome.tabs.sendMessage(tab.id, message);
    console.log(response);
    // TODO: Do something with the response.
  }
