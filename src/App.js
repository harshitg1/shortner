import './App.css';
import Inputfile from './Inputfile';
import Linkresult from './Linkresult';
import { useState } from "react";


function App() {
  const [inputValue, setInputValue] = useState(" ")

  return (
    <div className="container">
    
      
    <Inputfile setInputValue={setInputValue}/>
    <Linkresult inputValue={inputValue}/>
    
    </div>
  );
}

export default App;
