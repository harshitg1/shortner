import { useState } from "react";

const Inputfile = ({ setInputValue }) => {
  const [value, setValue] = useState("")
  const handleclick = ()=>{
    setInputValue(value);
    setValue("");
  }
  return (
    <div className="inputContainer">
        <h1> Url <span>SHORTNER</span></h1>
        <div>
            <input
             type="text" 
            placeholder="Paste link to be shortened"
            value={value}
            onChange={ e =>setValue(e.target.value)}
            /> 
            
            <button onClick={handleclick}>
                Shorten
            </button>
        </div>
    </div>
  )
}

export default Inputfile