import React, { useState } from 'react';
import SetCounter from './setCounter.js';
import BulbImg from './Images/bulb.png'
import './App.css';

function App() {

  let [counter, setCounter] = useState(0)
  let [isBulb, setBulb] = useState(true)

  return (
    <div className={` ${isBulb ? 'bulb-off' : ''}`}>

      <div className="App" >

        <SetCounter Count={counter} />

        <button className="count-btn" onClick={() => setCounter(counter + 1)}>
          Update Counter Value
      </button> <br />

        <img className="bulb" src={BulbImg} alt={"Bulb Pic"} />

        <button className="bulb-btn" onClick={() => setBulb(!isBulb)}>
          Switch
      </button>

      </div>

    </div>
  );
}

export default App;
