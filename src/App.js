// import logo from "./logo.svg";
import React, { useState }  from 'react'
import "./App.css";
import ColorChangeButton from './colorChangeButton'

function App() {
    const [color, setColor] = useState('')
  return (
    <div className={`react-root ${color}`}>
      <div className="centered">
        <h1> Color Picker </h1>
        <ColorChangeButton color="red" setColor={setColor}/>
        <ColorChangeButton color="yellow" setColor={setColor}/>
        <ColorChangeButton color="blue" setColor={setColor}/>
      </div>
    </div>
  );
}

export default App;
