import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

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

  const [retrievedTotal, setRetrievedTotal] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/retrieve/total").then((response) => {
      console.log(response.data);
      setRetrievedTotal(response.data);
    });
  }, []);

  const [retrievedTried, setRetrievedTried] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/retrieve/tried").then((response) => {
      setRetrievedTried(response.data);
    });
  }, []);

  return (
    <div className="App homepage">
      <div className="total-container">
        <input
          type="text"
          name="totalRestName"
          placeholder="Name of Restaurant you want to try"
          onChange={(e) => {
            setRestName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          name="totalRestDesc"
          placeholder="Description of Restaurant you want to try"
          onChange={(e) => {
            setRestDesc(e.target.value);
          }}
        ></input>
        <button onClick={updateTotal}>Submit</button>

        <div className="total-table">
          {retrievedTotal.map((item) => {
            return (
              <p>
                {" "}
                {item.Name} : {item.Description}{" "}
              </p>
            );
          })}
        </div>
      </div>
      <div className="tried-container">
        <input
          type="text"
          name="triedRestName"
          placeholder="Name of Restaurant you have tried"
          onChange={(e) => {
            setTriedRestName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          name="triedRestDesc"
          placeholder="Description of Restaurant you have tried"
          onChange={(e) => {
            setTriedRestDesc(e.target.value);
          }}
        ></input>
        <button onClick={updateTried}>Submit</button>
        <div className="tried-table">
          {retrievedTried.map((item) => {
            return (
              <p>
                {" "}
                {item.Name} : {item.Description}{" "}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
