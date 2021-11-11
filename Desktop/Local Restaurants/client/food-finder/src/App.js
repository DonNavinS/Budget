import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [restName, setRestName] = useState("");
  const [restDesc, setRestDesc] = useState("");
  const updateTable = () => {
    Axios.post("http://localhost:3001/test", {
      name: restName,
      description: restDesc,
    }).then(() => {
      alert("DB TABLE UPDATED");
    });
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          name="restName"
          onChange={(e) => {
            setRestName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          name="restDesc"
          onChange={(e) => {
            setRestDesc(e.target.value);
          }}
        ></input>
        <button onClick={updateTable}>Submit</button>
      </div>
    </div>
  );
}

export default App;
