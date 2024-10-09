import './App.css'

function App() {

  return (
    <>
     <MyButton />
    </>
  )
}



function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

export default App
