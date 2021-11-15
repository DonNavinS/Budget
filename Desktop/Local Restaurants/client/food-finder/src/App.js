import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [totalRestName, setRestName] = useState("");
  const [totalRestDesc, setRestDesc] = useState("");
  const updateTotal = () => {
    Axios.post("http://localhost:3001/total", {
      name: totalRestName,
      description: totalRestDesc,
    }).then(() => {
      alert("TOTAL RESTAURANTS TABLE UPDATED");
    });
  };

  const [triedRestName, setTriedRestName] = useState("");
  const [triedRestDesc, setTriedRestDesc] = useState("");
  const updateTried = () => {
    Axios.post("http://localhost:3001/tried", {
      name: triedRestName,
      description: triedRestDesc,
    }).then(() => {
      alert("TRIED RESTAURANTS TABLE UPDATED");
    });
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          name="totalRestName"
          onChange={(e) => {
            setRestName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          name="totalRestDesc"
          onChange={(e) => {
            setRestDesc(e.target.value);
          }}
        ></input>
        <button onClick={updateTotal}>Submit</button>
      </div>
      <div>
        <input
          type="text"
          name="triedRestName"
          onChange={(e) => {
            setTriedRestName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          name="triedRestDesc"
          onChange={(e) => {
            setTriedRestDesc(e.target.value);
          }}
        ></input>
        <button onClick={updateTried}>Submit</button>
      </div>
    </div>
  );
}

export default App;
