import { useState } from 'react';

function TextInput () {
    const [inputValue, setInputValue] = useState("");
    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  
    return (
      <>
        <input 
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Who are you going to say goodbye today?" />
        <p>Hasta la Vista, {inputValue}!</p>
      </>
    )
  }