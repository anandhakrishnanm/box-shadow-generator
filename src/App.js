import React, { useState } from "react";
import "./App.css";
import Output from "./components/Output/Output";
import Controls from "./components/Controls/Controls";
import Footer from "./components/Footer/Footer";

function App() {
  const [x, setX] = useState(3);
  const [y, setY] = useState(3);
  const [blur, setBlur] = useState(5);
  const [spread, setSpread] = useState(6);
  const [shadowColor, setShadowColor] = useState("#cccccc");
  const [isInset, setInset] = useState(false);
  const [radius, setRadius] = useState(3);
  const [parentBg, setParentBg] = useState("#f7f7f7");
  const [childBg, setChildBg] = useState("#ffffff");
  return (
    <div className="App">
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
          radius={radius}
          setRadius={setRadius}
          childBg={childBg}
          setChildBg={setChildBg}
          parentBg={parentBg}
          setParentBg={setParentBg}
          
        />
        <Output
          x={x}
          y={y}
          blur={blur}
          spread={spread}
          shadowColor={shadowColor}
          isInset={isInset}
          radius={radius}
          childBg={childBg}
          parentBg={parentBg}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
