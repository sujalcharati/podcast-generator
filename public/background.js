
chrome.runtime.onMessage.addListener((message,sender,sendResponse)=>{
  console.log(message.greeting);
  sendResponse({
    reply:"hi there"
  })
});
