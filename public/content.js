
chrome.runtime.sendMessage({
    greeting :"hello"
},(response)=>{
    console.log(response.reply)
})
alert('content script is loading...');
document.body.style.border = "5px solid red";