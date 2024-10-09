import './App.css'
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
         <div>
          <h1>You clicked {count} times.</h1>
          <MyButton count = {count} onClick={handleClick}/>
          <MyButton count = {count} onClick={handleClick}/>
        </div>
    </>
  )
}

  function MyButton({count, onClick}) {
  
    return (
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    );
  }

export default App
