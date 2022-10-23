import { Component } from 'react';
import { useState } from 'react';
import './App.css';
import { Inputs, Outputs } from './components'


const App = () => {
  const [velocity, setVelocity] = useState(0);
  const [angle, setAngle] = useState(0);
  return (
    <div className="App">
      <Inputs velocity={velocity} setVelocity={setVelocity} angle={angle} setAngle={setAngle} />
      <Outputs velocity={velocity} angle={angle} />
    </div>
  )
}

export default App;
