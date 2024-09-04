import "./App.css";
import data from "./data";
import Tour from "./Components/tour";
import { useState } from "react";

function App() {
  const [tours, setTours] = useState(data);

  function notInterestedHandler(id) {
    const newTours = tours.filter((tours) => tours.id !== id);
    setTours(newTours);
    console.log(tours);
  }
  function refreshHandler() {
    setTours(data);
  }

  if (tours.length === 0) {
    return (
      <div className="notour">
        <h2>No Tours Left</h2>
        <button onClick={refreshHandler} className="btn-white">
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div>
      <Tour tours={tours} notInterestedHandler={notInterestedHandler}>
        {" "}
      </Tour>
    </div>
  );
}

export default App;
