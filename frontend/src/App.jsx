import './App.css'
import axios from 'axios';

const url = 'http://127.0.0.1:8000'

async function getText(){
  const { data } = await axios.get(url).then((response)=>{
    console.log(response.data.message);
  }).catch((Error)=>{
    console.log(Error);
  })
  return data.message;
}

function App() {
  return (
    <>
    <header>
      <h1>소담</h1>
    </header>
    <div id='container'>
      <input type='file'/>
      <p>여기에 답변 출력</p>
      <div id='textContainer'>
        <p>{console.log(getText())}</p>
      </div>
    </div>
    </>
  )
}

export default App
