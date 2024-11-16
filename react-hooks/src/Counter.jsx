import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0); 
  
    return (
      <>
        <p>Count is at {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </>
    );
  }