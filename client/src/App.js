import { useState } from 'react'
import './App.css';

const App = () => {
  const [testVar, setTestVar] = useState("Test")
  const apiCall = () => {
    fetch("http://localhost:8000")
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  return <div>
    <h1>Hello World</h1>
    <p>{testVar}</p>
    <button onClick={apiCall}>Test</button>
  </div>
}

export default App;
