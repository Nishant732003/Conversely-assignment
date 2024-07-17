import React, { useState } from "react";
import "./App.css";

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill(""));
  const [clickOrder, setClickOrder] = useState([]);
  const [isLastBoxClicked, setIsLastBoxClicked] = useState(false);

  const handleClick = (index) => {
    if (isLastBoxClicked || boxes[index] === "green") return;

    const newBoxes = [...boxes];
    newBoxes[index] = "green";
    setBoxes(newBoxes);

    const newClickOrder = [...clickOrder, index];
    setClickOrder(newClickOrder);

    if (newClickOrder.length === 9) {
      setIsLastBoxClicked(true);
      setTimeout(() => handlechangeToOrange(newClickOrder), 600);
    }
  };

  const handlechangeToOrange = (boxOrder) => {
    let delay = 0;
    boxOrder.map((index, i) => {
      setTimeout(() => {
        setBoxes((prevBoxes) => {
          const newBoxes = [...prevBoxes];
          newBoxes[index] = "orange";
          return newBoxes;
        });
      }, delay);
      delay += 600;
    });
  };

  return (
    <div className="App">
      <div className="matrix">
        {boxes.map((color, index) => (
          <div
            key={index}
            className={`box ${color}`}
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
