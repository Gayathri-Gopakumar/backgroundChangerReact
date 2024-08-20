import React from "react";
import "./App.css";

function App() {
  const changeBackgroundColor = (events) => {
    const selectedColor = events.target.value;
    document.body.style.backgroundColor = selectedColor;
  };

  return (
    <div className="changer">
      <h1>Background Color Changer</h1>
      <input
        type="color"
        onChange={(events)=>changeBackgroundColor(events)}
      />
      <p>Select any color of your choice to change the background</p>
    </div>
  );
}

export default App;
