import React from "react";
import SliderWrapper from "./components/SliderWrapper";
import CommandBar from "./components/CommandBar";
import TriggerButton from "./components/TriggerButton";
import "./Static/css/style.css";
function App() {
  return (
    <div>
      <h1 className="app-title-h1">Controller App</h1>
      <div>
        <SliderWrapper />
      </div>
      <div>
        <TriggerButton />
      </div>
      <div>
        <CommandBar />
      </div>
    </div>
  );
}

export default App;
