import './App.css';
import Inputfile from './Inputfile';
import Linkresult from './Linkresult';
import { useState } from "react";


function App() {
  const [inputValue, setInputValue] = useState("")
  const setUrl = (url) => {
    setInputValue(url)
  }
  return (
    <div className="container">
    <Inputfile setUrl={setUrl}/>
    <Linkresult inputValue={inputValue}/>
    </div>
  );
}

export default App;
