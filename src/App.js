import { useState } from "react";

const App = ({ addition, subtraction }) => {
  let [number, setNumber] = useState(10);

  function HandleClick(e) {
    console.log(e.target);

    setNumber(e.target.value === "+" ? number + 1 : number - 1);
  }

  return (
    <>
      <div>{number}</div>
      <button onClick={HandleClick} className="square plus" value={addition}>
        {addition}
      </button>
      <button
        onClick={HandleClick}
        className="square minus"
        value={subtraction}
      >
        {subtraction}
      </button>
    </>
  );
};

export default App;
