import { useState } from 'react';

function ToggleButton() {
    const [isOn, setIsOn] = useState(false); 
  
    return (
      <>
        <p>Button is {isOn ? 'On' : 'Off'}</p> 
        <button onClick={() => setIsOn(!isOn)}>
          {isOn ? 'Turn Off' : 'Turn On'} 
        </button>
      </>
    );
  }