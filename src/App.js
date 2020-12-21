import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Output from "./components/Output/Output";
import Controls from "./components/Controls/Controls";

function App() {
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);
  const [blur, setBlur] = useState(10);
  const [spread, setSpread] = useState(10);
  const [shadowColor, setShadowColor] = useState("#000000");
  const [isInset, setInset] = useState(false);
  return (
    <div className="App">
      <Header />
      <div className="box-shadow-generator">
        <Controls
          x={x}
          setX={setX}
          y={y}
          setY={setY}
          blur={blur}
          setBlur={setBlur}
          spread={spread}
          setSpread={setSpread}
          shadowColor={shadowColor}
          setShadowColor={setShadowColor}
          isInset={isInset}
          setInset={setInset}
        />
        <Output
          x={x}
          y={y}
          blur={blur}
          spread={spread}
          shadowColor={shadowColor}
          isInset={isInset}
        />
      </div>
    </div>
  );
}

export default App;
