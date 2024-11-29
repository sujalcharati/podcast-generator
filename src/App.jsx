
import './App.css'

function App() {
async  function  generateAudio(){
  const res = await fetch(" https://dog.ceo/api/breeds/list/all");
  const data = await res.json();
  console.log(data)
  return data ;
  }

  return (
    <div>

      <h3> Do you want to generate a podcast for this article ? </h3>
      <button onClick={generateAudio}>click here</button>
    </div>
         
  )
}

export default App
