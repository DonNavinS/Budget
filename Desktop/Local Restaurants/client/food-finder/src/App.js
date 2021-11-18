import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [retrievedTotalCounter, setRetrievedTotalCounter] = useState(0);
  const [retrievedTriedCounter, setRetrievedTriedCounter] = useState(0);

  // ADD DATA TO TABLES
  const [totalRestName, setRestName] = useState("");
  const [totalRestDesc, setRestDesc] = useState("");
  const updateTotal = () => {
    Axios.post("http://localhost:3001/total", {
      name: totalRestName,
      description: totalRestDesc,
    }).then(() => {
      setRetrievedTotalCounter(retrievedTotalCounter + 1);
    });
  };

  const [triedRestName, setTriedRestName] = useState("");
  const [triedRestDesc, setTriedRestDesc] = useState("");
  const updateTried = () => {
    Axios.post("http://localhost:3001/tried", {
      name: triedRestName,
      description: triedRestDesc,
    }).then(() => {
      setRetrievedTriedCounter(retrievedTriedCounter + 1);
    });
  };

  // RETRIEVE AND DISPLAY DATA FROM TABLES
  const [retrievedTotal, setRetrievedTotal] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/retrieve/total").then((response) => {
      console.log(response.data);
      setRetrievedTotal(response.data);
    });
  }, [retrievedTotalCounter]);

  const [retrievedTried, setRetrievedTried] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/retrieve/tried").then((response) => {
      setRetrievedTried(response.data);
    });
  }, [retrievedTriedCounter]);

  // REMOVE DATA FROM TABLES
  const removeFromTotal = (id) => {
    Axios.delete(`http://localhost:3001/delete/total/${id}`).then(() => {});
    setRetrievedTotalCounter(retrievedTotalCounter + 1);
  };

  const removeFromTried = (id) => {
    Axios.delete(`http://localhost:3001/delete/tried/${id}`).then(() => {});
    setRetrievedTriedCounter(retrievedTriedCounter + 1);
  };
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
              <div key={item.ID}>
                {" "}
                {item.Name} : {item.Description}{" "}
                <button onClick={() => removeFromTotal(item.ID)}>
                  Remove From List
                </button>
              </div>
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
              <div key={item.ID}>
                {" "}
                {item.Name} : {item.Description}{" "}
                <button onClick={() => removeFromTried(item.ID)}>
                  Remove From List
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
