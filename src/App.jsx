import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(1);

  const handleClick = (e) => {
    if (e.target.innerText === "-") {
      if (count === 0) {
        setCount(0);
      } else {
        setCount((prevCount) => prevCount - 1);
      }
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter handleClick={handleClick} count={count} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
        <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count}/>
        <ExponentFive count={count}/>
        <ExponentSix count={count} />
       
      </div>
    </div>
  );
}

export default App;
