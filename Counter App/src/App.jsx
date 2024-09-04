import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  function increamentHandler() {
    setCount(count + 1);
  }
  function decreamentHander() {
    setCount(count - 1);
  }
  function resetHandler() {
    setCount(0);
  }
  return (
    <div className="flex w-[100vw] h-[100vh] bg-[#344151] items-center justify-center flex-col gap-10 ">
      <div className="text-[#0398d4] capitalize font-medium text-[20px]">
        Increment And Decrement
      </div>
      <div className="bg-white flex gap-12 p-3 px-5  text-[25px] text-[#344151] rounded">
        <button className="text-4xl" onClick={decreamentHander}>
          -
        </button>
        <div className="text-3xl">{count}</div>
        <button className="text-4xl" onClick={increamentHandler}>
          +
        </button>
      </div>
      <button
        className="bg-blue-500 text-2xl px-3 rounded"
        onClick={resetHandler}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
